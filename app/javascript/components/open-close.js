const pokedexOpenClose = () => {
  const pokedexClosed = document.getElementById("pokedex-closed")
  const pokedex = document.getElementById("pokedex")
  const open = document.getElementById("selectable-area-open")
  const close = document.getElementById("selectable-area-close")

  open.addEventListener('click', () => {
    pokedexClosed.classList.add('invisible');
    pokedex.classList.remove('invisible');
  });

  close.addEventListener('click', () => {
    pokedexClosed.classList.remove('invisible');
    pokedex.classList.add('invisible');
  });
}

export { pokedexOpenClose };
