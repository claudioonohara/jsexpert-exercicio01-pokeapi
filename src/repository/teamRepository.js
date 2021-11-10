const https = require('https')
const BASE_POKE_URL = "https://pokeapi.co/api/v2/pokemon"

class TeamRepository {

    async getList() {
        const pokemonList = await this.makeRequest()
        return pokemonList.results
    }

    async getPokeMoves(specifUrl) {
        const pokemonDetail = await this.makeRequest(specifUrl)
        return pokemonDetail.moves
    }

    async makeRequest(specifUrl) {
        const requestUrl = specifUrl ? specifUrl : BASE_POKE_URL
        return new Promise((resolve, reject) => {
            https.get(requestUrl, response => {
                let body = [];
                response.on("data", chunk => {
                     body.push(chunk);
                }).on('end', () => {
                    body = Buffer.concat(body);
                    resolve(JSON.parse(body))
                })
                response.on("error", reject)
            })
        })
    }
}

module.exports = TeamRepository