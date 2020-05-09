import { capitalize } from '../components/capitalize';

const search = () => {
  const search = document.getElementById("search");
  const button = document.getElementById("circle-button");
  const pokemons = document.querySelectorAll(".carousel-item")

  button.addEventListener('click', () => {
    const input = capitalize(search.value);
    const pokemon = document.getElementById(input);
    pokemons.forEach(pokemon => pokemon.classList.remove("active"));
    pokemon.classList.add("active");
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13 ) {
      const input = capitalize(search.value);
      const pokemon = document.getElementById(input);
      pokemons.forEach(pokemon => pokemon.classList.remove("active"));
      pokemon.classList.add("active");
    }
  });
}

export { search };
