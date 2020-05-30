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

  if (check < accuracy) {
    let damage = ((42 * move.power * (offence/defence))/50) + 2;
    description.innerText = `${pokemon1.name} used ${move.name}! It hit!`
    return damage;
  }
  else if (move.name === "Swift") {
    let damage = ((42 * move.power * (offence/defence))/50) + 2;
    description.innerText = `${pokemon1.name} used ${move.name}! It hit!`
    return damage;
  }
  else {
    description.innerText = `${pokemon1.name} used ${move.name}! It missed!`
    return 0;
  }
}

export { damages };
