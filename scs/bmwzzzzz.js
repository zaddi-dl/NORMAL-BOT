const qrcode = require('qrcode-terminal');
const { Client, MessageMedia, Buttons } = require('whatsapp-web.js');
const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const fs = require('fs');
const path = require('path');

const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', async (message) => {
    if (message.body === '!men') {
        const button = new Buttons('What would you like to do?', [
            {id: 'search_song', body: 'Search Song'},
            {id: 'search_video', body: 'Search Video'}
        ], 'Music Bot Menu', 'Choose an option');
        await client.sendMessage(message.from, button);
    } else if (message.body.startsWith('!search ')) {
        const query = message.body.slice(8);
        const results = await searchYouTube(query);
        const buttons = new Buttons(
            'Search Results',
            results.map((result, index) => ({id: `play_${index}`, body: result.title.substring(0, 20)})),
            'Choose a song/video to play',
            'Select one'
        );
        await client.sendMessage(message.from, buttons);
    }
});

client.on('message_create', async (message) => {
    if (message.fromMe && message.body.startsWith('!play ')) {
        const index = parseInt(message.body.split(' ')[1]);
        const results = await searchYouTube(message.body.split(' ').slice(2).join(' '));
        const selected = results[index];
        
        if (selected.type === 'video') {
            await downloadAndSendVideo(message, selected.url);
        } else {
            await downloadAndSendAudio(message, selected.url);
        }
    }
});

async function searchYouTube(query) {
    const results = await ytSearch(query);
    return results.videos.slice(0, 5).map(video => ({
        title: video.title,
        url: video.url,
        type: video.seconds > 900 ? 'video' : 'audio' // If longer than 15 minutes, treat as video
    }));
}

async function downloadAndSendAudio(message, url) {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    const filePath = path.join(__dirname, `${title}.mp3`);

    await new Promise((resolve, reject) => {
        ytdl(url, { filter: 'audioonly' })
            .pipe(fs.createWriteStream(filePath))
            .on('finish', resolve)
            .on('error', reject);
    });

    const media = MessageMedia.fromFilePath(filePath);
    await client.sendMessage(message.from, media, { sendAudioAsVoice: true });

    fs.unlinkSync(filePath);
}

async function downloadAndSendVideo(message, url) {
    const info = await ytdl.getInfo(url);
    const title = info.videoDetails.title.replace(/[^\w\s]/gi, '');
    const filePath = path.join(__dirname, `${title}.mp4`);

    await new Promise((resolve, reject) => {
        ytdl(url, { filter: 'videoandaudio' })
            .pipe(fs.createWriteStream(filePath))
            .on('finish', resolve)
            .on('error', reject);
    });

    const media = MessageMedia.fromFilePath(filePath);
    await client.sendMessage(message.from, media);

    fs.unlinkSync(filePath);
}
