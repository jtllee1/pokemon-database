import { createTypes } from '../components/create-types';

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const renderPokemon = (pokeData) => {
  let allPokemonContainer = document.getElementById('poke-container');
  let pokeContainer = document.createElement("div");
  let pokeName = document.createElement('h4');
  pokeName.innerText = capitalize(pokeData.name);
  let pokeNumber = document.createElement('p');
  pokeNumber.innerText = `#${pokeData.id}`;
  let pokeTypes = document.createElement('ul');
  createTypes(pokeData.types, pokeTypes);
  let pokeImage = document.createElement('img');
  pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`;
  pokeContainer.append(pokeName, pokeNumber, pokeTypes, pokeImage);
  allPokemonContainer.appendChild(pokeContainer);
}

export { renderPokemon };
