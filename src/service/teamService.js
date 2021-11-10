const TeamRepository = require("../repository/teamRepository")

class TeamService {
    constructor() {
        this.teamRepository = new TeamRepository()
    }

    getRandomPositionFromArray(list) {
        const listLength = list.length
        return Math.floor(
            Math.random() * (listLength)
        )
    }

    async chooseThreeRandomPokemon() {
        const pokemonList = await this.teamRepository.getList()
        const randomPokemonList = []
        for(let i = 0; i < 3; i++) {
            randomPokemonList.push(pokemonList[this.getRandomPositionFromArray(pokemonList)])
        }
        return randomPokemonList
    }
    
    async getFirstThreeMovesFromPokemon(pokemonUrl) {
        const firstThreeMoves = []

        const pokeMoves = await this.teamRepository.getPokeMoves(pokemonUrl)

        // const numberOfMoves = pokeMoves.length
        // const movesToget = (numberOfMoves > 3) ? 3 : numberOfMoves
        for(let i = 0; i < 3 ; i++) {
            firstThreeMoves.push(pokeMoves[i].move.name)
        }   
        
        return firstThreeMoves
    }

    async getPokemonList() {
        const pokemonFinalList = []
        const randomPokemonList = await this.chooseThreeRandomPokemon()
        for(let i = 0; i < randomPokemonList.length ; i ++) {
            pokemonFinalList.push(
                {
                    name: randomPokemonList[i].name,
                    moves: await this.getFirstThreeMovesFromPokemon(randomPokemonList[i].url)
                }
            )
        }

        return pokemonFinalList
    }

}

module.exports = TeamService