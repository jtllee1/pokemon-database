const dsOpenClose = () => {
  const dsClosed = document.getElementById("ds-lite-closed")
  const ds = document.getElementById("ds-lite")
  const open = document.getElementById("ds-selectable-area-open")
  const close = document.getElementById("ds-selectable-area-close")

  open.addEventListener('click', () => {
    dsClosed.classList.add('invisible');
    ds.classList.remove('invisible');
  });

  close.addEventListener('click', () => {
    dsClosed.classList.remove('invisible');
    ds.classList.add('invisible');
  });
}

export { dsOpenClose };
