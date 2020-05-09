import { capitalize } from '../components/capitalize';

const search = () => {
  const search = document.getElementById("search");
  const button = document.getElementById("circle-button");
  const redButton = document.getElementById("red-button");
  const pokemons = document.querySelectorAll(".carousel-item");

  button.addEventListener('click', () => {
    if (search.value !== "") {
      const input = capitalize(search.value);
      const pokemon = document.getElementsByClassName(input)[0];
      pokemons.forEach(pokemon => pokemon.classList.remove("active"));
      pokemon.classList.add("active");
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      const input = capitalize(search.value);
      const pokemon = document.getElementsByClassName(input)[0];
      pokemons.forEach(pokemon => pokemon.classList.remove("active"));
      pokemon.classList.add("active");
    }
  });

  redButton.addEventListener('click', () => {
    search.value = "";
    pokemons.forEach(pokemon => pokemon.classList.remove("active"));
    pokemons[0].classList.add("active");
  });
}

export { search };
