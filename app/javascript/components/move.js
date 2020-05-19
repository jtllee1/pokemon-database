const move = () => {
  window.addEventListener("keydown", function(e) {
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
  }, false);

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

  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      if (moveOne.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.remove("active");
        moveThree.classList.add("active");
        moveFour.classList.remove("active");
      }
      else if (moveTwo.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.remove("active");
        moveThree.classList.remove("active");
        moveFour.classList.add("active");
      }
      else if (moveThree.classList.contains("active")) {
        moveOne.classList.add("active");
        moveTwo.classList.remove("active");
        moveThree.classList.remove("active");
        moveFour.classList.remove("active");
      }
      else if (moveFour.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.add("active");
        moveThree.classList.remove("active");
        moveFour.classList.remove("active");
      }
    };
    if (e.keyCode === 37 || e.keyCode === 39) {
      if (moveOne.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.add("active");
        moveThree.classList.remove("active");
        moveFour.classList.remove("active");
      }
      else if (moveTwo.classList.contains("active")) {
        moveOne.classList.add("active");
        moveTwo.classList.remove("active");
        moveThree.classList.remove("active");
        moveFour.classList.remove("active");
      }
      else if (moveThree.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.remove("active");
        moveThree.classList.remove("active");
        moveFour.classList.add("active");
      }
      else if (moveFour.classList.contains("active")) {
        moveOne.classList.remove("active");
        moveTwo.classList.remove("active");
        moveThree.classList.add("active");
        moveFour.classList.remove("active");
      }
    };
  });
}

export { move };
