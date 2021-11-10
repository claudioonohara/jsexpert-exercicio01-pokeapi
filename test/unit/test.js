const TeamRepository = require("../../src/repository/teamRepository")

;
const TeamService = require("../../src/service/teamService");
(async () => {
    //  const repository = new TeamRepository()
    // const teamList = await repository.getList()
    // console.log('teamList',JSON.stringify(teamList))    
    // const teamList = await repository.getPokeMoves("https://pokeapi.co/api/v2/pokemon/7/")
    // console.log('teamList',JSON.stringify(teamList))    

    // const pokemonDetail = await repository.getById(7)
    // console.log('pokemonDetail',pokemonDetail.moves)
    // const teamList = await repository.getList()
    // console.log('teamList',teamList)
    const teamService = new TeamService()
    const getPokemonList = await teamService.getPokemonList()
    console.log('getPokemonList',getPokemonList)
    // console.log('threeRandomPokes',threeRandomPokes)
    // threeRandomPokes.forEach(url => teamService.getFirstThreeMovesFromPokemon(url))
    // const pokeDetail = await repository.getDetail(threeRandomPokes[0].url)
    // console.log('pokeMoves',pokeDetail.moves)
    // const pokeMoves = pokeDetail.moves
    // console.log('pokeMoves',pokeMoves)
    // pokeMoves.forEach(move => console.log(move.move.name))
    // const numberOfMoves = pokeMoves.length
    // const firstThreeMoves = []
    // const movesToget = numberOfMoves > 3 ? 3 : numberOfMoves
    // console.log('numberOfMoves',numberOfMoves)
    // for(let i = 0; i < movesToget; i++) {
        // firstThreeMoves.push(pokeMoves[i].move.name)
    // }
    // console.log('firstThreeMoves',firstThreeMoves)
    // const pokemonFinalList = await teamService.getPokemonList()
    // console.log('pokemonFinalList',pokemonFinalList)
})()