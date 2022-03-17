import { getData } from "./getData.js";

async function buscarPokemon() {
  let busqueda = document.querySelector("#nombre");
  let nombre = busqueda.value;
  let data = await getData(nombre.toLowerCase());
  if (data != -1) {
    eliminarPokemons();
    eliminarBoton();
    let image = data.sprites.other.dream_world.front_default;
    let name = data.name;
    let id = data.id;
    const imageDom = document.createElement("img");
    imageDom.src = image;
    const idDom = document.createElement("h2");
    idDom.textContent = `N. ${id}`;
    const nameDom = document.createElement("h3");
    nameDom.textContent = name;
    const pokemon = document.createElement("a");
    pokemon.classList.add("pokemon");
    pokemon.setAttribute("href",`./public/pokemon.html?id=${id}`)
    pokemon.append(imageDom, idDom, nameDom);
    const container = document.querySelector(".main");
    container.append(pokemon);
  } else {
    eliminarPokemons();
    eliminarBoton();
    const idDom = document.createElement("h2");
    idDom.textContent = `Ningun pokemon coincide con tu buqueda`;
    const pokemon1 = document.createElement("div");
    pokemon1.classList.add("nopokemon");
    pokemon1.append(idDom);
    const container1 = document.querySelector(".main");
    container1.append(pokemon1);
    swal("Ningun Pokemon coincide con tu busqueda");
  }
}

function eliminarBoton() {
  let button = document.querySelector(".load_more button");
  if (button) {
    button.remove();
  }
}

function eliminarPokemons() {
  let pokemons = [...document.querySelectorAll(".pokemon")];
  pokemons.forEach((element) => {
    element.remove();
  });
  let texto = document.querySelector(".nopokemon");
    if (texto) {
      texto.remove();
    }
}

export  {buscarPokemon,eliminarPokemons};
