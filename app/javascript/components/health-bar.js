const healthBar = () => {
  const healthBar = document.querySelector(".health-bar-1");
  const hpMax = document.getElementById("hp-1").innerText;
  const damage = 10;
  let currentHealth = hpMax;

  const healthBar2 = document.querySelector(".health-bar-2");
  const hpMax2 = document.getElementById("hp-2").innerText;
  const damage2 = 10;
  let currentHealth2 = hpMax2;

  const execute = document.getElementById("execute");

  execute.addEventListener('click', () => {
    for (let step = 0; step < damage; step++) {
      document.getElementById('1-health-'+currentHealth).classList.add("red");
      currentHealth = parseInt(currentHealth);
      currentHealth = currentHealth - 1;
      currentHealth = currentHealth.toString();
    };
    for (let step = 0; step < damage2; step++) {
      document.getElementById('2-health-'+currentHealth2).classList.add("red");
      currentHealth2 = parseInt(currentHealth2);
      currentHealth2 = currentHealth2 - 1;
      currentHealth2 = currentHealth2.toString();
    };
  });
}

export { healthBar };
