const https = require('https');
const fs = require('fs');
const HTTP_PORT = 8000;

const routes = {
    '/team:get': (request, response) => {
        response.write('team page')
        return response.end()
    },
    '/:get': (request, response) => {
        return response.end()
    },
    default: (request, response) => {
        response.writeHead(302, {
            location: "/",
        });
        return response.end();
    }
}

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const handler = function (request, response) {
    const { url, method } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    
    response.writeHead(200, { 
         'Content-Type': 'application/json'
    })
    return chosen(request, response)
}

const app = https.createServer(options,handler)
    .listen(HTTP_PORT, () => console.log('app running at', HTTP_PORT));

module.exports = app