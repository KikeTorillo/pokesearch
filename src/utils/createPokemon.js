import {homeInfo} from "../pages/home.js"

async function createPokemons(data) {
  const pokemons = await data;
  const newArray = await pokemons.map(async (element) => {
    const pokemon = await fetch(element.url);
    const parsePokemon = await pokemon.json();
    return parsePokemon;
  });
  Promise.all(newArray).then((data) => {
      homeInfo(data);
  });
}

export {createPokemons};