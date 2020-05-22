import { pokemonCreate } from '../components/pokemon-create';
import { moveCreate } from '../components/move-create';
import { healthBar } from '../components/health-bar';
import { move } from '../components/move';

const pokemon1 = {};
const pokemon2 = {};
const aMove1 = {};
const aMove2 = {};
const aMove3 = {};
const aMove4 = {};
const bMove1 = {};
const bMove2 = {};
const bMove3 = {};
const bMove4 = {};


pokemonCreate(pokemon1, pokemon2);
moveCreate(aMove1, aMove2, aMove3, aMove4, bMove1, bMove2, bMove3, bMove4)
healthBar(pokemon1, pokemon2, aMove1, aMove2, aMove3, aMove4, bMove1, bMove2, bMove3, bMove4);
move();
