import { damages } from '../components/damages';
import { battleDialogue } from '../components/battle-dialogue';

const healthBar = (pokemon1, pokemon2, aMove1, aMove2, aMove3, aMove4, bMove1, bMove2, bMove3, bMove4) => {
  const healthQuery = document.getElementById("current-health");
  const healthBar = document.querySelector(".health-bar-1");
  const hpMax = pokemon1["hp"];
  var chosenMove;
  let currentHealth = hpMax;

  const healthBar2 = document.querySelector(".health-bar-2");
  const hpMax2 = pokemon2["hp"];
  const enemyMoves = [bMove1, bMove2, bMove3, bMove4];
  let currentHealth2 = hpMax2;

  const execute = document.getElementById("a-button");

  let recharge1 = 0;
  let recharge2 = 0;

  const description = document.getElementById('description');
  let descriptionText = document.createElement('p');

  execute.addEventListener('click', () => {
    var chosenMove = document.querySelector(".active").id;
    var chosenMove2 = enemyMoves[Math.floor(Math.random()*enemyMoves.length)];

    if (chosenMove === "move-1") {
      var playerMove = aMove1;
      var pp = document.getElementById("pp-1");
      var ppRemaining = pp.innerText;
    }
    else if (chosenMove === "move-2") {
      var playerMove = aMove2;
      var pp = document.getElementById("pp-2");
      var ppRemaining = pp.innerText;
    }
    else if (chosenMove === "move-3") {
      var playerMove = aMove3;
      var pp = document.getElementById("pp-3");
      var ppRemaining = pp.innerText;
    }
    else if (chosenMove === "move-4") {
      var playerMove = aMove4;
      var pp = document.getElementById("pp-4");
      var ppRemaining = pp.innerText;
    };

    if (ppRemaining > 0) {
      if (pokemon1.spd > pokemon2.spd) {
        setTimeout(() => {
          if (currentHealth > 0 && recharge1 == 0) {
            var damage = damages(pokemon1, pokemon2, playerMove);
            if (playerMove["name"] == "Hyper-beam" && damage > 0) {
              recharge1 = 1;
            };
            for (let step = 0; step < damage; step++) {
              setTimeout( function timer(){
                  document.getElementById('2-health-'+currentHealth2).classList.add("red");
                  currentHealth2 = parseInt(currentHealth2);
                  currentHealth2 = currentHealth2 - 1;
                  currentHealth2 = currentHealth2.toString();
                }, step * 2 );
            };
            ppRemaining = ppRemaining - 1;
            pp.innerText = `${ppRemaining}`;
          }
          else if (recharge1 == 1) {
            recharge1 = 0;
            description.innerText = `${pokemon1.name} is recharging!`
          };
        }, 0);

        setTimeout(() => {
          if (currentHealth2 > 0 && recharge2 == 0) {
            var damage2 = damages(pokemon2, pokemon1, chosenMove2);
            if (chosenMove2["name"] == "Hyper-beam" && damage > 0) {
              recharge2 = 1;
            };
            for (let step = 0; step < damage2; step++) {
              setTimeout( function timer(){
                document.getElementById('1-health-'+currentHealth).classList.add("red");
                currentHealth = parseInt(currentHealth);
                currentHealth = currentHealth - 1;
                currentHealth = currentHealth.toString();
                healthQuery.innerText = currentHealth;
              }, step * 2 );
            };
          }
          else if (recharge2 == 1) {
            recharge2 = 0;
            description.innerText = `${pokemon2.name} is recharging!`
          };
        }, 1500);
      }
      else if (pokemon1.spd < pokemon2.spd) {
        setTimeout(() => {
          if (currentHealth2 > 0 && recharge2 == 0) {
            var damage2 = damages(pokemon2, pokemon1, chosenMove2);
            if (chosenMove2["name"] == "Hyper-beam" && damage > 0) {
              recharge2 = 1;
            };
            for (let step = 0; step < damage2; step++) {
              setTimeout( function timer(){
                document.getElementById('1-health-'+currentHealth).classList.add("red");
                currentHealth = parseInt(currentHealth);
                currentHealth = currentHealth - 1;
                currentHealth = currentHealth.toString();
                healthQuery.innerText = currentHealth;
              }, step * 2 );
            };
          }
          else if (recharge2 == 1) {
            recharge2 = 0;
            description.innerText = `${pokemon2.name} is recharging!`
          };
        }, 0);

        setTimeout(() => {
          if (ppRemaining >= 0) {
            if (currentHealth > 0 && recharge1 == 0) {
              var damage = damages(pokemon1, pokemon2, playerMove);
              if (playerMove["name"] == "Hyper-beam" && damage > 0) {
                recharge1 = 1;
              };
              for (let step = 0; step < damage; step++) {
                setTimeout( function timer(){
                  document.getElementById('2-health-'+currentHealth2).classList.add("red");
                  currentHealth2 = parseInt(currentHealth2);
                  currentHealth2 = currentHealth2 - 1;
                  currentHealth2 = currentHealth2.toString();
                }, step * 2 );
              };
              ppRemaining = ppRemaining - 1;
              pp.innerText = `${ppRemaining}`;
            }
            else if (recharge1 == 1) {
              recharge1 = 0;
              description.innerText = `${pokemon1.name} is recharging!`
            };
          }
        }, 1500);
      };
    }
    else {
      description.innerText = `That move is out of pp!`
    };

    setTimeout(() => {
      if (currentHealth <= 0) {
        healthQuery.innerText = 0;
      }
      battleDialogue(currentHealth, currentHealth2, pokemon1, pokemon2);
    }, 3500);
  });
};

export { healthBar };
