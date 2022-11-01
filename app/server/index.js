const express = require('express');
const app = express();

async function startSever() {
    
    app.get('/', function(req, res){

        res.send("Hello world");
    });

    app.listen(80);
}

module.exports = startSever;