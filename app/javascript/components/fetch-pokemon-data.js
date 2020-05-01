import { renderPokemon } from '../components/render-pokemon';

const fetchPokemonData = (pokemon) => {
  let url = pokemon.url
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      renderPokemon(data);
    });
}

export { fetchPokemonData }
