const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3qVHrl4QSM6YhEFEfAC2oIb81BAAcVdKFDs8N830O7oediZ7a2niqLIk5WZ57yDLMcVUlELpu+gKHEDCeq2pC0QmIJZ7fuoBBTwIIFgCvIlibTxmB0e4WR39txcq3ypoU/yLZ4EhULvfF09LlP7tHBfwZ0CRe0k2P0DIHFaol2UYPdWxIXXkO0o6i9qN5TW+gxbcV6v8wVbZD16Yb+Ce4cIcYmzYFGEKEUlTFTUbiEuv0df3VozHs1cVZG55CpxWhMc0viw4ZVJ3B9zcv4mGNvWPIkS/z363m21y22/VOvBmddgwsm9mRnCdjc5HuWZrx9v54jez9X8Fj/pVzjIkKd4KCOYtN/WXVlFC1N3y8XA7sX7iJY2k75tDy2oL8IsZy03mdfG5ianrP094gbLWnO0tNir46790F0l67J0BoUVaGOmv5HUt0y4Ka3LhfyvxLflZ1bi/6N7rI6YfdEv1jYz8gsh8lM5ioxi8LY4ChfuTbf0drVN8n50jL9HfyYMzlJVpEqL9/Zp3uRpYMhDHBlchOft1XAv3GB7Gke2YX/Rh6Qu/8Ryd8Wbhb9JXQYPMuG27G2Y23yzaKBR+tF5s4jVaH2Ab7aNnPF2iJrtxNtzaaQ4dU83Ki3tV5rqTVo3bLTYSjVZZYr97PL6eFGMWsUDU+ZOgRIFuCIlJDjPHmcDCkCvMZFbIvJQF6ThPBHLgCjt6KgaZr0Yqb7DJrx13QVyPauvYbRfx9opH+uvgAJFmbuoqpC3xBXJy1ZHVQUDVIHp3z8pkKErefrWVeMYCvi4rMghq4skh96nqZ8foevmdUbMNnPFboNKMKW/jhEhOAuqTsY6g6Ub4gaJISQVmPowqdCdAh5qsIs6PHAZLs/+0H0xNxBdDZzJpjFMhI5ymGfPK2PIT1h2NHxBA3b8MhgN/RfI0OyLM3Jdh/PhiPc4QAH80TLdP79vE2t9YpjMskJ6X9GC0re9HcbCmzRQHi48pUcl8sCUlDWigAPduC72eYyyP+BWq9NBEkXOTM4RT5+x7YiretI4eOL+gvu0FEzfv8aUmHsdHi+yx5E2NAEF0kcCcfdylhvw9JgZDcb8iJ4yw7+qH5dOSVgUPzJEAAUy2F0HP56r7kp9+NCBeIhAnFRgCkRdXiYuvVjom+hW0rIsHAJBDDqhP337zP8zYISRg7zi1c1lLR2Jqmy0pI+VIzL6zSzbzxRNvkQ9eNakiH79F5DONnrrc8Jhfp3b/uygopXaa+hwd9kSfRdpsj8W1CUT+1kU9ojQbuXdYVJu1OLm8bgRjcOwEfxtsuKjq1x7OdIHvMGbj2b5zM+vxQQu5lWkubeFeTb2Ei85Yy+czZf2LOrfcA2HLWJWjLlXpRJaOTr2GMmsxN3alUZ9/2DerEOw467c0NnE2AoPtKrrfXH37MzHZEg+JjJ+NM37R9p8jB4D7sOG//brK/n0nfoF5GNm/m6YOZ6Rq9pWjKq58VaaeI6H/gBLWeyPLyf6YorXSumnZ3y1J+B+/0mBIoHEz8u0i2bqQECBBFZE+OrcPU5RRWBagCkz5iY8ywxZlgJpKxSFSSD5bHggdGt+ScH9H5R5lHgLCAAA',
    PREFIXE: process.env.PREFIX || "@",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





