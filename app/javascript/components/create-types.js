import { capitalize } from '../components/capitalize';

const createTypes = (types, ul) => {
  types.forEach(function(type){
    let typeLi = document.createElement('li');
    typeLi.innerText = capitalize(type['type']['name']);
    ul.append(typeLi);
  })
}

export { createTypes };
