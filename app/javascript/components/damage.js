const damages = (pokemon1, pokemon2, move) => {
  if (move.damageClass === "Physical") {
    var offence = pokemon1.atk
    var defence = pokemon2.def
  } else if (move.damageClass === "Special") {
    var offence = pokemon1.spatk
    var defence = pokemon2.spdef
  };
  var check = Math.random() * 100
  var accuracy = move.accuracy
  if (check < accuracy) {
    return ((42 * move.power * (offence/defence))/50) + 2;
  } else {
    console.log("It missed!");
    return 0;
  }
}

export { damages };
