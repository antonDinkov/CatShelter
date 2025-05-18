const http = require('http');
const { homeHandler } = require('./handlers/home');
const { staticFileHandler } = require('./handlers/static');
const { addBreedHandler, postBreedHandler } = require('./handlers/addBreed');
const port = 3000;

const routes = {
    'GET': {
        '/': homeHandler,
        './index.html': homeHandler,
        '/cats/add-breed': addBreedHandler
    },
    'POST': {
        '/cats/add-breed': postBreedHandler
    }

}

http.createServer((req, res) => {
    const methodRoutes = routes[req.method];

    if (methodRoutes) {
        const route = methodRoutes[req.url];
        if (typeof route === 'function') {
            route(req, res);
            return;
        }
    }

    if (staticFileHandler(req, res)) {
        return;
    }

    res.writeHead(404, {
        'Content-Type': 'text/plaint'
    });
    res.write('404 Page not Found!')
    res.end();

}).listen(port);