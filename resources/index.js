const http = require('http');
const { homeHandler } = require('./handlers/home');
const { staticFileHandler } = require('./handlers/static');
const port = 3000;

const routes = {
    '/': homeHandler,
    './index.html': homeHandler
}

http.createServer((req, res) => {
    const route = routes[req.url];
    if (typeof route === 'function') {
        route(res);
        return;
    } else if (staticFileHandler(req, res)) {
        return;
    }
    
    res.writeHead(404, {
        'Content-Type': 'text/plaint'
    });
    res.write('404 Page not Found!')
    res.end();

}).listen(port);