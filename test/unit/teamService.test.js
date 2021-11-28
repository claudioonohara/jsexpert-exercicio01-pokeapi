const { describe, it, before, beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')
const { expect } = require('chai')

const TeamService = require('../../src/service/teamService')

const mocks = {
  pokeAPIRequestResultsValid: require('./../mocks/poke-api-request-results-valid.json'),
  validThreePokesFromMockPokeApiRequestResultsValidWithIndex1: require('./../mocks/valid-three-pokes-from-mock-poke-api-request-results-valid-with-index-1.json'),
  pokeAPIRequestPokeDetailMovesValid: require('./../mocks/poke-api-request-poke-detail-moves-valid.json'),
  validFirstThreeMovesFromPokeApiRequestPokeDetailMovesValid: require('./../mocks/valid-first-three-moves-from-poke-api-request-poke-detail-moves-valid.json'),
  validTeam: require('./../mocks/valid-team.json')
}

describe('TeamService Suite Test', () => {
  let teamService = {}
  let sandbox = {}
  before(() => {
    teamService = new TeamService()
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it('should return a random number between 1 and the length of array', () => {
    const arr = [0, 1, 2]
    const result = teamService.getRandomPositionFromArray(arr)

    expect(result).to.be.lte(arr.length).and.be.gte(0)
  })

  it('should return three random pokemon with name and url', async () => {
    const pokeAPIRequestResultsValid = mocks.pokeAPIRequestResultsValid
    const pokeRandomIndex = 1

    sandbox.stub(
      teamService.teamRepository,
      teamService.teamRepository.getList.name
    ).resolves(pokeAPIRequestResultsValid)

    sandbox.stub(
      teamService,
      teamService.getRandomPositionFromArray.name
    ).returns(pokeRandomIndex)

    const result = await teamService.chooseThreeRandomPokemon()
    const expected = mocks.validThreePokesFromMockPokeApiRequestResultsValidWithIndex1

    expect(result).to.be.deep.equal(expected)
  })

  it('should call three times random function', async () => {
    const pokeAPIRequestResultsValid = mocks.pokeAPIRequestResultsValid

    sandbox.stub(
      teamService.teamRepository,
      teamService.teamRepository.getList.name
    ).resolves(pokeAPIRequestResultsValid)

    const spy = sinon.spy(teamService, teamService.getRandomPositionFromArray.name)

    await teamService.chooseThreeRandomPokemon()

    const expectedCallCount = 3

    expect(spy.callCount).to.be.deep.equal(expectedCallCount)
  })

  it('should get the first three moves from pokemon', async () => {
    const pokeAPIRequestPokeDetailMovesValid = mocks.pokeAPIRequestPokeDetailMovesValid

    sandbox.stub(
      teamService.teamRepository,
      teamService.teamRepository.getPokeMoves.name
    ).resolves(pokeAPIRequestPokeDetailMovesValid)

    const result = await teamService.getFirstThreeMovesFromPokemon()
    const expected = mocks.validFirstThreeMovesFromPokeApiRequestPokeDetailMovesValid

    expect(result).to.be.deep.equal(expected)
  })

  it('should return a list of three pokemons with their name and three moves', async () => {
    const pokes = mocks.validThreePokesFromMockPokeApiRequestResultsValidWithIndex1
    const pokeMoves = mocks.validFirstThreeMovesFromPokeApiRequestPokeDetailMovesValid

    sandbox.stub(
      teamService,
      teamService.chooseThreeRandomPokemon.name
    ).resolves(pokes)

    sandbox.stub(
      teamService,
      teamService.getFirstThreeMovesFromPokemon.name
    ).resolves(pokeMoves)

    const result = await teamService.getPokemonList()
    const expected = mocks.validTeam
    expect(result).to.be.deep.equal(expected)
  })
})
