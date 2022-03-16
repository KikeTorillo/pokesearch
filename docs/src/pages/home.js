
  function homeInfo(pokemons) {
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
      const pokemon = document.createElement("a");
      pokemon.classList.add("pokemon");
      pokemon.setAttribute("href",`../dist/public/pokemon.html?id=${id}`)
      pokemon.append(imageDom, idDom, nameDom);
      allitems.push(pokemon);
    });
    const container = document.querySelector(".main");
    container.append(...allitems);
  }

  export {homeInfo}; 