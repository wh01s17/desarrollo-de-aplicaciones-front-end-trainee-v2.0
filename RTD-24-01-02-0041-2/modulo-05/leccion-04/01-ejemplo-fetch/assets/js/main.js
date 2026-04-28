// 1 - Función tradicional con then
function obtenerDataThen() {
    return fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) =>
        res.json(),
    );
}

obtenerDataThen().then((res) => console.log(res.name));

// 2 - Función async con then
async function dataThen() {
    const results = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");

    return results.json();
}

dataThen().then((res) => console.log(res.name));

// 3 - Funciones async/await separadas
async function getData() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");

    return res.json();
}

async function showData() {
    const data = await getData();

    console.log(data.name);
}

showData();

// 4 - Arrow functions + async/await
const obtenerDatos = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/mewtwo");

    return res.json();
};

const mostrarDatos = async () => {
    const data = await obtenerDatos();

    console.log(data.name);
};

mostrarDatos();
