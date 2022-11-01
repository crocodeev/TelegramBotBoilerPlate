require('dotenv').config();
const getDevelopUrl = require('./app/develop_url');
const startSever = require('./app/server/index');

isDevelop = process.env.MODE === 'develop' ? true : false;

(async () => {

    let URL;

    /*if(isDevelop){
        NGROK_TOKEN = process.env.NGROK;
        URL = await getDevelopUrl(NGROK_TOKEN);
    }else{
        process.env.URL;
    }*/

    //startSever(URL);

    startSever('localhost');

})();



