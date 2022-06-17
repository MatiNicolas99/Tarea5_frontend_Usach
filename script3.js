// EJERCICIO 4

let pokemones = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'];
let nuevo_arreglo = pokemones.map(pokemon => pokemon.toUpperCase());
console.log("Arreglo con mayúsculas", nuevo_arreglo);


// EJERCICIO 5 


let pokemones1 = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

const pokemones_fuego = pokemones1.filter( pokemon => pokemon.tipo === 'Fuego');
console.log("Los pokemones tipo fuego son :", pokemones_fuego );

