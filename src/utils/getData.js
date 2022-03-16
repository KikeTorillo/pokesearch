const API = `https://pokeapi.co/api/v2/pokemon/`;
//Funcion con la cual se obtiene la informacion de la API
const getData = async (id,limit,offset) => { 
    let apiURL;
    if (id) {   //condicion para traer varios personajes o solo el especificado en el id
        apiURL = `${API}${id}`; 
    } else if(limit>=0 && offset>=0){
        apiURL = `${API}?limit=${limit}&offset=${offset}`;
    } else {
        apiURL = API;
    }
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        return -1;
    };
};

export {getData};