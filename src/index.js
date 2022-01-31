
fetch('https://pokeapi.co/api/v2/pokemon/6')
.then(response => response.json())
.then(data => {
    rellenarInfo(data)
});


function rellenarInfo (data) {
    const image = data.sprites.other.dream_world.front_default;
    const name = data.name;
    const experience = data.base_experience;
    const height = data.height;
    const weight = data.weight;
    const abilities = data.abilities
    const imageDOm = document.querySelector('.card--main--img');
    imageDOm.src = image;
    const nameDom = document.querySelector('.card--pokemonname');
    nameDom.textContent = name.toUpperCase();
    const experienceDom = document.querySelector('.card--experience');
    experienceDom.textContent = experience;
    const heightDom = document.querySelector('.height');
    heightDom.textContent = `0,${height}m`
    const weightDom = document.querySelector('.weight');
    weightDom.textContent = `${weight}`
    const allitems = [];
    abilities.forEach(ability => {
        const habilidad = document.createElement('p');
        habilidad.textContent = ability.ability.name;
        allitems.push(habilidad);
    });
    const abilitiesDom = document.querySelector('.abilities');
    abilitiesDom.append(...allitems);

}
