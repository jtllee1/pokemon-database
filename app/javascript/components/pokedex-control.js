const pokedexControl = () => {
  const up = document.getElementById("up");
  const down = document.getElementById("down");
  const redButton = document.getElementById("red-button");
  const all_images_1 = document.querySelectorAll(".image-1");
  const all_images_2 = document.querySelectorAll(".image-2");

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

  redButton.addEventListener('click', () => {
    all_images_1.forEach(image => image.classList.remove("invisible"));
    all_images_2.forEach(image => image.classList.add("invisible"));
  });
}

export { pokedexControl };
