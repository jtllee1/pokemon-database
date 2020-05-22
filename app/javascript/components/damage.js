const damages = (pokemon1, pokemon2, move) => {
  if (move.damageClass === "Physical") {
    var offence = pokemon1.atk
    var defence = pokemon2.def
  } else if (move.damageClass === "Special") {
    var offence = pokemon1.spatk
    var defence = pokemon2.spdef
  };
  return ((42 * move.power * (offence/defence))/50) + 2;
}

export { damages };
