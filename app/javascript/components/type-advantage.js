const typeAdvantage = (mType, pType) => {
  if (mType == "Bug") {
    if (pType == "Dark" || pType == "Grass" || pType == "Psychic") {
      return 2;
    }
    else if (pType == "Fairy" || pType == "Fighting" || pType == "Fire" || pType == "Flying" || pType == "Ghost" || pType == "Poison" || pType == "Steel") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Dark") {
    if (pType == "Ghost" || pType == "Psychic") {
      return 2;
    }
    else if (pType == "Dark" || pType == "Fairy" || pType == "Fighting") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Dragon") {
    if (pType == "Dragon") {
      return 2;
    }
    else if (pType == "Steel") {
      return 0.5;
    }
    else if (pType == "Fairy") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Electric") {
    if (pType == "Flying" || pType == "Water") {
      return 2;
    }
    else if (pType == "Electric" || pType == "Dragon" || pType == "Grass") {
      return 0.5;
    }
    else if (pType == "Ground") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Fairy") {
    if (pType == "Dark" || pType == "Dragon" || pType == "Fighting") {
      return 2;
    }
    else if (pType == "Fire" || pType == "Poison" || pType == "Steel") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Fighting") {
    if (pType == "Dark" || pType == "Ice" || pType == "Normal" || pType == "Rock" || pType == "Steel") {
      return 2;
    }
    else if (pType == "Bug" || pType == "Fairy" || pType == "Flying" || pType == "Poison" || pType == "Psychic") {
      return 0.5;
    }
    else if (pType == "Ghost") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Fire") {
    if (pType == "Bug" || pType == "Grass" || pType == "Ice" || pType == "Steel") {
      return 2;
    }
    else if (pType == "Dragon" || pType == "Fire" || pType == "Rock" || pType == "Water") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Flying") {
    if (pType == "Bug" || pType == "Fighting" || pType == "Grass") {
      return 2;
    }
    else if (pType == "Electric" || pType == "Rock" || pType == "Steel") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Ghost") {
    if (pType == "Ghost" || pType == "Psychic") {
      return 2;
    }
    else if (pType == "Dark") {
      return 0.5;
    }
    else if (pType == "Normal") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Grass") {
    if (pType == "Ground" || pType == "Rock" || pType == "Water") {
      return 2;
    }
    else if (pType == "Bug" || pType == "Dragon" || pType == "Fire" || pType == "Flying" || pType == "Grass" || pType == "Poison" || pType == "Steel") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Ground") {
    if (pType == "Electric" || pType == "Fire" || pType == "Poison" || pType == "Rock" || pType == "Steel") {
      return 2;
    }
    else if (pType == "Bug" || pType == "Grass") {
      return 0.5;
    }
    else if (pType == "Flying") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Ice") {
    if (pType == "Dragon" || pType == "Flying" || pType == "Grass" || pType == "Ground") {
      return 2;
    }
    else if (pType == "Fire" || pType == "Ice" || pType == "Steel" || pType == "Water") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Normal") {
    if (pType == "Rock" || pType == "Steel") {
      return 0.5;
    }
    else if (pType == "Ghost") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Poison") {
    if (pType == "Fairy" || pType == "Grass") {
      return 2;
    }
    else if (pType == "Ghost" || pType == "Ground" || pType == "Poison" || pType == "Rock") {
      return 0.5;
    }
    else if (pType == "Steel") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Psychic") {
    if (pType == "Fighting" || pType == "Poison") {
      return 2;
    }
    else if (pType == "Psychic" || pType == "Steel") {
      return 0.5;
    }
    else if (pType == "Dark") {
      return 0;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Rock") {
    if (pType == "Bug" || pType == "Fire" || pType == "Flying" || pType == "Ice") {
      return 2;
    }
    else if (pType == "Fighting" || pType == "Ground" || pType == "Steel") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Steel") {
    if (pType == "Fairy" || pType == "Ice" || pType == "Rock") {
      return 2;
    }
    else if (pType == "Electric" || pType == "Fire" || pType == "Steel" || pType == "Water") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (mType == "Water") {
    if (pType == "Fire" || pType == "Ground" || pType == "Rock") {
      return 2;
    }
    else if (pType == "Dragon" || pType == "Grass" || pType == "Water") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
};

export { typeAdvantage };
