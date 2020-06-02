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

  let check = Math.random() * 100;
  let accuracy = move.accuracy;

  let critCheck = Math.random() * 100;

  const description = document.getElementById('description');
  let descriptionText = document.createElement('p');

  let typeDamage1 = typeAdvantage(move["type"], pokemon1["type-1"]);
  let typeDamage2 = typeAdvantage(move["type"], pokemon1["type-2"]);

  if (check < accuracy || move.name == "Swift") {
    if (critCheck < 4.167) {
      var critDamage = 1.5;
    }
    else {
      var critDamage = 1;
    }

    if (pokemon1["type-1"] == move["type"] || pokemon1["type-2"] == move["type"]) {
      var stab = 1.5;
    }
    else {
      var stab = 1;
    }

    let damage = (((42 * move.power * (offence/defence))/50) + 2) * typeDamage1 * typeDamage2 * critDamage * stab;

    if (critDamage == 1) {
      var hit = "It hit!";
    }
    else {
      var hit = "It was a critical hit!";
    }

    if (typeDamage1 * typeDamage2 == 1) {
      var effective = "";
    }
    else if (typeDamage1 * typeDamage2 >= 2) {
      var effective = "It was super effective!";
    }
    else if (typeDamage1 * typeDamage2 <= 0.5) {
      var effective = "It was not very effective!";
    }
    else if (typeDamage1 * typeDamage2 == 0) {
      var effective = "It had no effect!";
    }

    description.innerText = `${pokemon1.name} used ${move.name}! ${hit} ${effective}`

    return damage;
  }
  else {
    description.innerText = `${pokemon1.name} used ${move.name}! It missed!`

    return 0;
  }
}

export { damages };
