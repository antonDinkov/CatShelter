const http = require('http');
const { homeHandler } = require('./handlers/home');
const port = 3000;

const routes = {
    '/': homeHandler,
    './index.html': homeHandler
}

http.createServer((req, res) => {
    const route = routes[req.url];
    if (typeof route === 'function') {
        homeHandler(res);
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.write('404 Page not Found! ')
        res.end();
    }

}).listen(port);