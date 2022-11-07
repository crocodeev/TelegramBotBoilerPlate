require('dotenv');
const ngrok = require('ngrok');

async function getDevelopUrl(token) {
    
    const URL = await ngrok.connect({
        authtoken: token,
        addr: 8080,
        host_header: "localhost",
    });

    return URL;
}

(async () => {

    const URL = await getDevelopUrl(process.env.NGROK);

    console.log("Your develop url from ngrok is ");
    console.log(URL);

})()