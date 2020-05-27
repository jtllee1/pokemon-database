import { damages } from '../components/damage';

const healthBar = (pokemon1, pokemon2, aMove1, aMove2, aMove3, aMove4, bMove1, bMove2, bMove3, bMove4) => {
  const healthBar = document.querySelector(".health-bar-1");
  console.log(chosenMove);
  const hpMax = pokemon1["hp"];
  var chosenMove;
  let currentHealth = hpMax;

  const healthBar2 = document.querySelector(".health-bar-2");
  const hpMax2 = pokemon2["hp"];
  const enemyMoves = [bMove1, bMove2, bMove3, bMove4];
  let currentHealth2 = hpMax2;

  const execute = document.getElementById("a-button");

  execute.addEventListener('click', () => {
    var chosenMove = document.querySelector(".active").id;
    var chosenMove2 = enemyMoves[Math.floor(Math.random()*enemyMoves.length)];

    if (chosenMove === "move-1") {
      var playerMove = aMove1;
    }
    else if (chosenMove === "move-2") {
      var playerMove = aMove2;
    }
    else if (chosenMove === "move-3") {
      var playerMove = aMove3;
    }
    else if (chosenMove === "move-4") {
      var playerMove = aMove4;
    }

    setTimeout(() => {
      var damage = damages(pokemon1, pokemon2, playerMove);
      for (let step = 0; step < damage; step++) {
        document.getElementById('2-health-'+currentHealth2).classList.add("red");
        currentHealth2 = parseInt(currentHealth2);
        currentHealth2 = currentHealth2 - 1;
        currentHealth2 = currentHealth2.toString();
      };
    }, 0);

    setTimeout(() => {
      var damage2 = damages(pokemon2, pokemon1, chosenMove2);
      for (let step = 0; step < damage2; step++) {
        document.getElementById('1-health-'+currentHealth).classList.add("red");
        currentHealth = parseInt(currentHealth);
        currentHealth = currentHealth - 1;
        currentHealth = currentHealth.toString();
      };
    }, 1500);

    setTimeout(() => {
      const description = document.getElementById('description');
      description.innerText = "";
      let descriptionText = document.createElement('p');
      descriptionText.innerText = `What will ${pokemon1.name} do?`
      description.append(descriptionText);
    }, 3500);
  });
}

export { healthBar };
