require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
// import { fetchKantoPokemon } from '../components/fetch-kanto-pokemon';
import { pokedexControl } from '../components/pokedex-control';
import { search } from '../components/search';
import { pokedexOpenClose } from '../components/open-close';

// fetchKantoPokemon();
pokedexControl();
search();
pokedexOpenClose();
