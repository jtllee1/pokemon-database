import { fetchPokemonData } from '../components/fetch-pokemon-data';

const fetchKantoPokemon = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      data.results.forEach(function(pokemon){
        fetchPokemonData(pokemon);
      });
    });
}

export { fetchKantoPokemon }
