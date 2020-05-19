const move = () => {
  const moveOne = document.getElementById("move-1");
  const moveTwo = document.getElementById("move-2");
  const moveThree = document.getElementById("move-3");
  const moveFour = document.getElementById("move-4");

  moveOne.addEventListener('click', () => {
    moveOne.classList.add("active");
    moveTwo.classList.remove("active");
    moveThree.classList.remove("active");
    moveFour.classList.remove("active");
  });

  moveTwo.addEventListener('click', () => {
    moveOne.classList.remove("active");
    moveTwo.classList.add("active");
    moveThree.classList.remove("active");
    moveFour.classList.remove("active");
  });

  moveThree.addEventListener('click', () => {
    moveOne.classList.remove("active");
    moveTwo.classList.remove("active");
    moveThree.classList.add("active");
    moveFour.classList.remove("active");
  });

  moveFour.addEventListener('click', () => {
    moveOne.classList.remove("active");
    moveTwo.classList.remove("active");
    moveThree.classList.remove("active");
    moveFour.classList.add("active");
  });
}

export { move };
