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