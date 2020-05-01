const createTypes = (types, ul) => {
  types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = type['type']['name'];
    ul.append(typeLi);
  })
}

export { createTypes };
