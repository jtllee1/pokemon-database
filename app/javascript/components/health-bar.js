const healthBar = () => {
  const healthBar = document.getElementById("health-bar");
  const healthGauge = document.querySelectorAll(".health-gauge");
  const execute = document.getElementById("execute");
  const hp = document.getElementById("hp").innerText;
  const damage = 10;
  let currentHealth = hp;

  execute.addEventListener('click', () => {
    for (let step = 0; step < damage; step++) {
      document.querySelector('.health-'+currentHealth).classList.add("red");
      currentHealth = parseInt(currentHealth);
      currentHealth = currentHealth - 1;
      currentHealth = currentHealth.toString();
    };
  });
}

export { healthBar };
