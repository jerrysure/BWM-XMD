const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KjNhT8F73aG2OuxlVTFe6D7/hup/IggwAZLLAQGLzlf08x3slOJbubyRslUJ8+fboPXwHJcIHGqAHDryCnuIIMtY+syREYAr0MQ0RBFwSQQTAEjmarorLe4anpXtajk6PqOLw0F5SLxurQ90tvrpg3Tpo77gt4dEFenlLs/wIQXa156CR6IiWbs+JdLA+LEpmbzoQQm0ZWx6wbjtPHdjN4AY8WEWKKSWTlMbogCtMxahYQ08/R5zU6vfOyKm6sw4ka2/I4ZZNipcEJGh/1aS9X0/Oct3WZv32OvhY091g7rpm/9BNHwQN3oq4b4TAN856n9/rmNV+zM5PJxn3SL3BEUOAGiDDMmk/rzo1NsXfYdXpZMBhtlqhfp6lwP23tTj7uBKlU16sVKxtL5g+fI37dGItdiQ3G7UZcr5duSibMKxoYdydSjrt0nWg9jhRwYW0+El/Qd68k/0f3yyjglt554ThhJW0SvjP3iddbcJYz29oz+Vba031yLFXZ0j5Hvy50XaGH4p71SLG/ymS63O7Ke4nsXRyeB8msmogLR8X6R/qQlfRXLKtmhMdyL5rS12Xl6wpZ+K8ilOP9WE1gpV7FMilVs8FXgwiuY/b4/SZXbyttVG0424x6E84618aMhBHHXQ5mvVeTJdZe3jpKUOMGYNh/dAFFES4YhQxnpD0T+C6AQbVCPkXsTV2wWUhUdot0YqznfJSnKe+Go9kt48934VxuddUdcDm5evdx9AK6IKeZj4oCBa+4YBltpqgoYIQKMPzjbVBtzxRdMoZGOGhjIIhqX5DkviQPlN+L324xZAXM898IYqALQppdpggMGS1RF7zdUBTL5BRBlbi+IfUN2RZ5XeY425KVASeIUtvi5Vl1jS+oYPCSg2FfETlFFCV18PizCwiq2dM/b133uyDEtGAbUuZpBoN3c72/hL6flYStGuIb7QOiYMh9P0aMYRIVbWslgdSPcYWMtg8wDGFaoEcXBKjCPmrxwOxk7Y7zqlhWV221y+qxOT8Lt1a6OCPPT0QZBj7i5C8qp8AvoiSHX9T+gP8iyILUR5ISwJMPWjme0W3v/NRJGzHjWMCCw34822p155DLIl4iaunZmxueFkAUBe8qn6CflPk6SxD51bZ0l9ZK4jwiLuOxcIjLq12WtgBPQvQB92ktMPz6fV0aWdDiWfbrwVx5E9BOq63zbzsMB/80xONv0dsbAWIQpwUYAsMtVynTDMtdL2IqOo5mRZoRaeD7kN5D93Q1ndycuvTPG/9u2Dbvzsso64T2LkrTsLNmfon36d2ZTrF5ePkBCBiCaaNYt1juxeeZaXPejp/1xelgeRJPg50n701frZTb5jgPO+K4nr92OI3PuauHWEK82L2i1woaYWEPKNJJX6mSzuq1NryXttrTLB+L9cenI4OSvr3Q7WlS4Tk8ibtVmuZI2o8lvV6tkx2m3F2kTsfI0snAPkuuFwaisY3lsldvPaWIvU12LFMWlbP5zuKV2Huug7d1lH77DeBvSX1aK8TobasS2I7ov4bz0eXco/sB49ue/omTdNgM9OJE3P7r9BYvA2zSbLwg9TYbHfe9RNlPslTy67PpRjx4tPHNU8jCjF7AEEAS0AwHoAtSWDDte1B/lH3h8RcI7Ia0ZQgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
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

