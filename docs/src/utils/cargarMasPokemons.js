import {getData} from "../utils/getData.js";
import {createPokemons} from "../utils/createPokemon.js";

async function cargarMasPokemons() {
    let pokemonsDom = [...document.querySelectorAll(".pokemon")];
    let cargarMas = pokemonsDom.length + 1;
    let data = await getData(null,5,cargarMas);
    await createPokemons(data.results);
  }

  export  {cargarMasPokemons};