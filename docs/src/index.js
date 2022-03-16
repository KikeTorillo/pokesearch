import {getData} from "../getData.js";
import {createPokemons} from "../createPokemon.js";
import {buscarPokemon,eliminarPokemons} from "../buscarPokemon.js";
import {cargarMasPokemons} from "../cargarMasPokemons.js";
const data = await getData(null,5,0);

addEventListener('load',createPokemons(data.results));

var elInput = document.querySelector("#nombre");
elInput.addEventListener("keydown", function (e) {
  var keycode = e.key;
  if (keycode == "Enter") {
    e.preventDefault();
    if (elInput.value) {
      buscarPokemon(elInput.value);
    } else {
      eliminarPokemons();
      createPokemons(data.results)
    }
    
  }
}); 

let botonCargarMas = document.querySelector('#loadMore');
botonCargarMas.addEventListener("click",cargarMasPokemons)

