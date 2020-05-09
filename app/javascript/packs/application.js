require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
// import { fetchKantoPokemon } from '../components/fetch-kanto-pokemon';
import { pokedexControl } from '../components/pokedex-control';
import { search } from '../components/search';

// fetchKantoPokemon();
pokedexControl();
search();
