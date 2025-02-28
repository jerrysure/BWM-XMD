const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2Y6jRhT9l3q1e8xmgy21FANewBs2Nl6ieSigwAUYMFVAQ8u/0CPlA/KWlyg/1X8S0Yt6ImUmnbdScTn31Dn33EcQJ5igGarA4BGkGS4gRc2RVikCAyDnnocy0AYupBAMQKXsJxs5sYtaKFfUOoinozdTOavaQXbMeykWp7HI+eZs79yDWxukuR1h5yeAdcs8zaseYy0Xmj0kq0UyUQl7jYXtIeYPqrb04qlZa9N0F96DW4MIcYZjf5Se0QVlMJqhyoA4+xx9ZcTIprSSVGc7tUouVXjOWTmnlmTZhrxm1jOTv155ZhdH5efoXxkjcHIn4Fyz77qFk2CZvdiTZUcudxY1Ylkcb856qRvq+pU+wX6MXM1FMcW0+rTumjrark1tr+BxXhWJlFpGr673h66z03Vo1c7DoS/NV562Tz5H3ApRRyDI25SGUBe1usPjcYzzIXeiR6ZOwsqmciXtu2v5H8SN7H1Wwv+jO5SPRxsZ02gRkmXFtvSocAJWHLllJs+1bksUNq5V933WGn6SPpySsYsXi61pSNjqXPVh7iDsrLbr2N9rmt0y8nQuX6i5+KAPaZ79jGXATQ9szeQPXdHG4yEfnLLkgRdP0WW/n4dr1N1qaGQrYtnvtxAbnK/iHBqTsR+7c5J2hqifrFirD1ueyy+YiguCArlyef/yohBVmgsG7K0NMuRjQjNIcRI3dxzLtQF0CxM5GaIv8oJLtV5uKpUm14mvVJt0Ow2656wjUGzL9iwMxKgji8uJMl6U96AN0ixxECHInWJCk6xaIEKgjwgY/Pq1DWL0QF+Na9rxbBt4OCN0F+dplED33dX3j9BxkjymZhU7SnNAGRgwH9eIUhz7pNExj2HmnHGBlDOkBAw8GBF0awMXFdhBDR6Q+VSa5bi/1a53luwkqVrJpd9QPifxa4kjSp4kMs6d0+s7dwIHu3f9LiPdwa7II76HeLbPgzbAb5lp/vmhhVnSGm5OkoKOqW7tLEZn5FUvrcacEL7Y8Ko9ypALBjTLURvY0AnzdJuEKP4JrtrC57C/7l2ldF2FJjzGpwfIaqgujt/hvnoKBo8fe0pJ3AZPXxxG1lHhQBtcXkYQNy/neEFieZHhWZ4VBlzvF/KlbJSEafolRhS0QQybcqCcn5/+fP722/O335+f/nh++qvp+WZIg+YiCnFEmsp51sFzooz0+fCcCZPJcOQPFX8IPgx8T8LrpCXXpJf7m56wtM4nUuzG+yBYjKpRR1WW7DFYSrIRFCUc+6P1/b+AgAGIpaVjnNjQIDtT70qGnbcEmGv+DovnE7E6HfOwGhOV9PNraWnU3RQrQ6HmKhhWPWbLVclyF9JuSoYbqf8wxf6Omz7I6/um2+sgfd/MQ/ugUI1lkujp5hrFOlwslL40GV39sLeKVql1soOTZ9SVrobunGG0bTgrW5HYOkaByuqWwqxpceFbk1oVdjrLmuFSfcvoy46I3nYzfknP49vYeRi9rLo3P/7buI8IMLf2dyBv2/MHYybD2XWVJSOUq9Zxb89Z2UqEWl6cjbIM3L1We8OtIEqT81EegdvtaxukEaRekl3AAJCLDUEbRJDQ4UeEt/iCCIWXFAxYUWBEgetJ4u1vB0BCYvgHAAA=',
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

