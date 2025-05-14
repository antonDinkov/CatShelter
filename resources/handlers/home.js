const { readFile } = require("../util");

function homeHandler(res) {
    const html = readFile('./views/home/index.html');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(html);
    res.end();
}


module.exports = {
    homeHandler
}