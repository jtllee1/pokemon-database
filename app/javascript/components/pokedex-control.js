const pokedexControl = () => {
  const up = document.getElementById("up");
  const down = document.getElementById("down");

  up.addEventListener('click', () => {
    const active = document.querySelector(".active");
    const image_1 = active.querySelector(".image-1");
    const image_2 = active.querySelector(".image-2");
    image_1.classList.toggle('invisible');
    image_2.classList.toggle('invisible');
  });

  down.addEventListener('click', () => {
    const active = document.querySelector(".active");
    const image_1 = active.querySelector(".image-1");
    const image_2 = active.querySelector(".image-2");
    image_1.classList.toggle('invisible');
    image_2.classList.toggle('invisible');
  });
}

export { pokedexControl };
