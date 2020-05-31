import { typeAdvantage } from '../components/type-advantage';

const damages = (pokemon1, pokemon2, move) => {
  if (move.damageClass === "Physical") {
    var offence = pokemon1.atk
    var defence = pokemon2.def
  }
  else if (move.damageClass === "Special") {
    var offence = pokemon1.spatk
    var defence = pokemon2.spdef
  };

  let check = Math.random() * 100
  let accuracy = move.accuracy

  const description = document.getElementById('description');
  let descriptionText = document.createElement('p');

  let typeDamage1 = typeAdvantage(move["type"], pokemon1["type-1"]);
  let typeDamage2 = typeAdvantage(move["type"], pokemon1["type-2"]);

  if (check < accuracy) {
    let damage = (((42 * move.power * (offence/defence))/50) + 2) * typeDamage1 * typeDamage2;

    if (typeDamage1 * typeDamage2 == 1) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit!`
    }
    else if (typeDamage1 * typeDamage2 >= 2) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It was super effective!`
    }
    else if (typeDamage1 * typeDamage2 <= 0.5) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It was not very effective!`
    }
    else if (typeDamage1 * typeDamage2 == 0) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It had no effect!`
    }

    return damage;
  }
  else if (move.name === "Swift") {
    let damage = (((42 * move.power * (offence/defence))/50) + 2) * typeDamage1 * typeDamage2;

    if (typeDamage1 * typeDamage2 == 1) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit!`
    }
    else if (typeDamage1 * typeDamage2 >= 2) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It was super effective!`
    }
    else if (typeDamage1 * typeDamage2 <= 0.5) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It was not very effective!`
    }
    else if (typeDamage1 * typeDamage2 == 0) {
      description.innerText = `${pokemon1.name} used ${move.name}! It hit! It had no effect!`
    }

    return damage;
  }
  else {
    description.innerText = `${pokemon1.name} used ${move.name}! It missed!`

    return 0;
  }
}

export { damages };
