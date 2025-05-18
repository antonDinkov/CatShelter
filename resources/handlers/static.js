const { readFile } = require("../util");
const path = require('path');

function staticFileHandler (req, res) {
    if (req.url.endsWith('.css')) {
        const filePath = path.join(__dirname, '../../resources', req.url);
        const data = readFile(filePath);

        res.writeHead(200, {
            'Content-Type': 'text/css'
        });
        res.write(data);
        res.end();

        return true
    }
    return false;
}

module.exports = {
    staticFileHandler
}