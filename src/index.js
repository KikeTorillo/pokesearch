let offset = 0;
let limit = 5;
const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
// Creamos nuestra función con dos parámetros: ruta, fn
async function obtenerDatos(url) {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const arrayData = data.results;
      createPokemon(arrayData);
    });
}

async function createPokemon(data) {
  const pokemons = await data;
  const newArray = await pokemons.map(async (element) => {
    const pokemon = await fetch(element.url);
    const parsePokemon = await pokemon.json();
    return parsePokemon;
  });
  Promise.all(newArray).then((data) => {
    rellenarInfo(data);
  });
}

function rellenarInfo(pokemons) {
  const allitems = [];
  pokemons.forEach((item) => {
    let image = item.sprites.other.dream_world.front_default;
    let name = item.name;
    let id = item.id;
    const imageDom = document.createElement("img");
    imageDom.src = image;
    const idDom = document.createElement("h2");
    idDom.textContent = `N. ${id}`;
    const nameDom = document.createElement("h3");
    nameDom.textContent = name;
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    pokemon.append(imageDom, idDom, nameDom);
    allitems.push(pokemon);
  });
  const container = document.querySelector(".main");
  container.append(...allitems);
}

function cargarMasPokemons() {
  let pokemonsDom = [...document.querySelectorAll(".pokemon")];
  let cargarMas = pokemonsDom.length + 1;
  const urlMas = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${cargarMas}`;
  obtenerDatos(urlMas);
}

var elInput = document.getElementById("nombre");
elInput.addEventListener("keydown", function (e) {
  var keycode = e.key;
  if (keycode == "Enter") {
    e.preventDefault();
    buscarPokemon();
  }
});

async function buscarPokemon() {
  let busqueda = document.querySelector("#nombre");
  if (busqueda.value != "") {
    urlApiOne = `https://pokeapi.co/api/v2/pokemon/${busqueda.value}`;
    await fetch(urlApiOne)
      .then((response) => {
        if (response.ok) {
          response.json()
          .then((data) => {
            let pokemons = [...document.querySelectorAll(".pokemon")];
            pokemons.forEach((element) => {
              element.remove();
            });
            let button = document.querySelector('.load_more button');
            if (button) {
              button.remove(); 
            }
            let image = data.sprites.other.dream_world.front_default;
            let name = data.name;
            let id = data.id;
            const imageDom = document.createElement("img");
            imageDom.src = image;
            const idDom = document.createElement("h2");
            idDom.textContent = `N. ${id}`;
            const nameDom = document.createElement("h3");
            nameDom.textContent = name;
            const pokemon = document.createElement("div");
            pokemon.classList.add("pokemon");
            pokemon.append(imageDom, idDom, nameDom);
            const container = document.querySelector(".main");
            container.append(pokemon);
          }) 
        }else {
          /* let pokemons = [...document.querySelectorAll(".pokemon")];
          pokemons.forEach((element) => {
            element.remove();
          });
          let button = document.querySelector('.load_more button');
          if (button) {
            button.remove(); 
          }
          const idDom = document.createElement("h2");
          idDom.textContent = `Ningun pokemon coincide con tu buqueda`;
          const pokemon1 = document.createElement("div");
          pokemon1.classList.add("nopokemon");
          pokemon1.append(idDom);
          const container1 = document.querySelector(".main");
          container1.append(pokemon1); */
          swal("Ningun Pokemon coincide con tu busqueda");
        }
      })
      .catch((error) => {
        //console.error(error);
      })
     
  }
}

obtenerDatos(urlApi);
