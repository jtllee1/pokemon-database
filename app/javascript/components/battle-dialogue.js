const battleDialogue = (currentHealth, currentHealth2, pokemon1, pokemon2) => {
  const image1 = document.getElementById("image-1");
  const image2 = document.getElementById("image-2");

  if (currentHealth <= 0) {
    var text = `${pokemon1.name} fainted! You lost!`
    image1.classList.add("invisible");
  }
  else if (currentHealth2 <= 0) {
    var text = `${pokemon2.name} fainted! You won!`
    image2.classList.add("invisible");
  }
  else {
    var text = `What will ${pokemon1.name} do?`
  };

  const description = document.getElementById('description');
  description.innerText = "";
  let descriptionText = document.createElement('p');
  descriptionText.innerText = text;
  description.append(descriptionText);
};

export { battleDialogue };
