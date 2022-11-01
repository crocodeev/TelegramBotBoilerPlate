const ngrok = require('ngrok');

async function getDevelopUrl(token) {
    
    const URL = await ngrok.connect({
        authtoken: token
    });

    return URL;
}

module.exports = getDevelopUrl;