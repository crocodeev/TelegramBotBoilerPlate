/**
 * @todo add ssl sertificate
 */
require('dotenv');
const express = require('express');
const path = require('path');

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, '../frontend/index.html');
console.log("HTML_FILE: ", HTML_FILE);

app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
    res.sendFile(HTML_FILE);
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Listening on ...", PORT);
});