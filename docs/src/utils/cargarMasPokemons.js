import {getData} from "./getData.js";
import {createPokemons} from "./createPokemon.js";

async function cargarMasPokemons() {
    let botonCargarMas = document.querySelector('#loadMore');
    botonCargarMas.setAttribute("disabled","");
    let pokemonsDom = [...document.querySelectorAll(".pokemon")];
    let cargarMas = pokemonsDom.length;
    let data = await getData(null,5,cargarMas);
    await createPokemons(data.results);
  }

  export  {cargarMasPokemons};