const pokemonCreate = (pokemon1, pokemon2) => {
  pokemon1["hp"] = document.getElementById("hp-1").innerText;
  pokemon1["atk"] = document.getElementById("atk-1").innerText;
  pokemon1["def"] = document.getElementById("def-1").innerText;
  pokemon1["spatk"] = document.getElementById("spatk-1").innerText;
  pokemon1["spdef"] = document.getElementById("spdef-1").innerText;
  pokemon1["spd"] = document.getElementById("spd-1").innerText;
  pokemon1["type-1"] = document.getElementById("1-type-1").innerText;
  pokemon1["type-2"] = document.getElementById("1-type-2").innerText;

  pokemon2["hp"] = document.getElementById("hp-2").innerText;
  pokemon2["atk"] = document.getElementById("atk-2").innerText;
  pokemon2["def"] = document.getElementById("def-2").innerText;
  pokemon2["spatk"] = document.getElementById("spatk-2").innerText;
  pokemon2["spdef"] = document.getElementById("spdef-2").innerText;
  pokemon2["spd"] = document.getElementById("spd-2").innerText;
  pokemon1["type-1"] = document.getElementById("2-type-1").innerText;
  pokemon1["type-2"] = document.getElementById("2-type-2").innerText;
}

export { pokemonCreate };
