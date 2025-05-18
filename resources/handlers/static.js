const { readFile } = require("../util");
const path = require('path');

async function staticFileHandler (req, res) {
    if (req.url.endsWith('.css')) {
        const filePath = path.join(__dirname, '../../resources', req.url);
        sendFile(filePath, 'text/css', res)

        return true
    }
    return false;
}

async function sendFile(path, contentType, res) {
    const data = await readFile(path);
    res.writeHead(200, {
        'Content-type': contentType
    });
    data.pipe(res);
};

module.exports = {
    staticFileHandler
}