const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')

const TeamRepository = require("../../src/repository/teamRepository")
const { expect } = require('chai')

const mocks = {
    pokeAPIRequest: require('./../mocks/poke-api-request.json'),
    pokeAPIRequestResultsValid: require('./../mocks/poke-api-request-results-valid.json'),
    pokeAPIRequestPokeDetail: require('./../mocks/poke-api-request-poke-detail.json'),
    pokeAPIRequestPokeDetailMovesValid: require('./../mocks/poke-api-request-poke-detail-moves-valid.json'),
}

describe('TeamRespository Suite Test', () => {
    let teamRepository = {}
    let sandbox = {}
    before(() => {
        teamRepository = new TeamRepository()
    })

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })

    it('Should return a list of pokemon with name and url', async ()=> {
        const pokeAPIRequest = mocks.pokeAPIRequest

        sandbox.stub(
            teamRepository,
            teamRepository.makeRequest.name
        ).resolves(pokeAPIRequest)

        const result = await teamRepository.getList()
        const expected = mocks.pokeAPIRequestResultsValid

        expect(result).to.be.deep.equal(expected)
    })
    it('Should return a list of pokemon moves', async ()=> {
        const pokeAPIRequestPokeDetail = mocks.pokeAPIRequestPokeDetail

        sandbox.stub(
            teamRepository,
            teamRepository.makeRequest.name
        ).resolves(pokeAPIRequestPokeDetail)

        const result = await teamRepository.getPokeMoves()
        const expected = mocks.pokeAPIRequestPokeDetailMovesValid

        expect(result).to.be.deep.equal(expected)
    })
})
// ;
// (async () => {
//      const repository = new TeamRepository()

//     // const pokemonDetail = await repository.getById(7)
//     // console.log('pokemonDetail',pokemonDetail.moves)
//     // const teamList = await repository.getList()
//     // console.log('teamList',teamList)
//     const teamService = new TeamService()
//     // const threeRandomPokes = await teamService.chooseThreeRandomPokemon()
//     // console.log('threeRandomPokes',threeRandomPokes)
//     // threeRandomPokes.forEach(url => teamService.getFirstThreeMovesFromPokemon(url))
//     // const pokeDetail = await repository.getDetail(threeRandomPokes[0].url)
//     // console.log('pokeMoves',pokeDetail.moves)
//     // const pokeMoves = pokeDetail.moves
//     // console.log('pokeMoves',pokeMoves)
//     // pokeMoves.forEach(move => console.log(move.move.name))
//     // const numberOfMoves = pokeMoves.length
//     // const firstThreeMoves = []
//     // const movesToget = numberOfMoves > 3 ? 3 : numberOfMoves
//     // console.log('numberOfMoves',numberOfMoves)
//     // for(let i = 0; i < movesToget; i++) {
//         // firstThreeMoves.push(pokeMoves[i].move.name)
//     // }
//     // console.log('firstThreeMoves',firstThreeMoves)
//     const pokemonFinalList = await teamService.getPokemonList()
//     console.log('pokemonFinalList',pokemonFinalList)
// })()