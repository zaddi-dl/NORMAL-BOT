

const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://giftedapis.us.kg';
const adamsapikey = 'ibrahimtech_ai';
adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch the video download URLhttps://api.prabath-md.tech/api/ytmp3?url=${encodeURIComponent(urlElement)}`);
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();


      if (apiResult.status === 200 && apiResult.success) {
        const videoDlUrl = apiResult.result.download_url;

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\n
> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
        }, { quoted: ms });

        repondre('Downloded Successfully ✅');
     } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});

adams({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio downlhttps://abu-2f6def455bb4.herokuapp.com/download/ytmp3oad URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

adams({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${adamsapikey}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});


/**
const { adams } = require("../Ibrahim/adams");
const yts = require('yt-search');
const BaseUrl = 'https://abu-2f6def455bb4.herokuapp.com';
adams({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song/video name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // https://abu-2f6def455bb4.herokuapp.com/download/ytmp3?url=https://music.youtube.com/watch?v=6POZlJAZsok&si=FgIl9XCg__1V8m4_}`);
      const apiResponse = await fetch(`https://abu-2f6def455bb4.herokuapp.com/download/ytmp4?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 'success ✅') {
        const videoDlUrl = apiResult.data.download;
        const fileInfo = {
          title: apiResult.data.title,
          fileSize: apiResult.data.file_size,
          quality: apiResult.data.quality
        };

        // Prepare the message with video details
        const infoMess = {
          image: { url: videos[0].thumbnail },
         caption: `Bmw is downloading ${apiResult.result.title} by ${videos[0].author.name}\n Time : ${videos[0].timestamp}\n\n
> ©Ibrahim Adams`
        };

        // Send video details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the video as a URL (direct download link)
        await zk.sendMessage(dest, {
          video: { url: videoDlUrl },
          mimetype: 'video/mp4',
          
        }, { quoted: ms });

        repondre('Downloded Successfully ✅');
     } else {
        repondre('Searching...⏳');
      }
    } else {
      repondre('No videos found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('Searching...⏳');
  }
});

adams({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio downlhttps://abu-2f6def455bb4.herokuapp.com/download/ytmp3oad URL
      const apiResponse = await fetch(`${BaseUrl}/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});

adams({
  nomCom: "song1",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;

  if (!arg[0]) {
    repondre("Please insert a song name.");
    return;
  }

  try {
    let topo = arg.join(" ");
    let videos = [];

    // Perform YouTube search
    const search = await yts(topo);
    videos = search.videos;

    if (videos && videos.length > 0) {
      const videoUrl = videos[0].url;

      // Call the API endpoint with the video URL to fetch audio download URL
      const apiResponse = await fetch(`${BaseUrl}/download/ytmp3?url=${encodeURIComponent(videoUrl)}`);
      const apiResult = await apiResponse.json();

      if (apiResult.status === 200 && apiResult.success) {
        const audioDlUrl = apiResult.result.download_url;
        
        // Prepare the message with song details
        const infoMess = {
          image: { url: videos[0].thumbnail },
          caption: `*BMW SONG PLAYER*\n\n*◁ II ▷ 1:00 •၊၊||၊|။||။||၊|||။ ၊|•${videos[0].timestamp}*\n\n*©Ibrahim Adams*`
        };

        // Send song details
        await zk.sendMessage(dest, infoMess, { quoted: ms });

        // Send the audio as a Buffer instead of URL
        await zk.sendMessage(dest, {
          audio: { url: audioDlUrl },
          mimetype: 'audio/mp4'
        }, { quoted: ms });

        repondre(`*Bmw Just Downloaded ${apiResult.result.title}*\n\n*®Adams 2024*`);
   
      } else {
        repondre('Failed to download audio. Please try again later.');
      }
    } else {
      repondre('No audio found.');
    }
  } catch (error) {
    console.error('Error from API:', error);
    repondre('An error occurred while searching or downloading the audio.');
  }
});
**/
