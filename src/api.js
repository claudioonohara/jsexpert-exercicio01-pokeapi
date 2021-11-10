const http = require('http');

const TeamService = require('./service/teamService');
const HTTP_PORT = 8000;

const routes = {
    '/team:get': async (request, response) => {
        const teamService = new TeamService()
        const pokemonFinalList = await teamService.getPokemonList()
        response.write(JSON.stringify(pokemonFinalList))

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

const handler = function (request, response) {
    const { url, method } = request
    const routeKey = `${url}:${method.toLowerCase()}`
    const chosen = routes[routeKey] || routes.default
    
    response.writeHead(200, { 
         'Content-Type': 'application/json'
    })
    return chosen(request, response)
}

const app = http.createServer(handler)
    .listen(HTTP_PORT, () => console.log('app running at', HTTP_PORT));

module.exports = app