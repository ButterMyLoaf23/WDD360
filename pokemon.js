const lists = document.querySelector("list");
const detail = document.querySelector("details");
const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=40";

function createList(pokemon) {
    return `<li><button data-url="${pokemon.url}"> ${pokemon.name} </button></li>`;
}

function pokemonDetails(pokemon) {
    return `<h2>${pokemon.name}
    <img src="${item.sprites.front_default}" alt="${pokemon.name}">`;
}

