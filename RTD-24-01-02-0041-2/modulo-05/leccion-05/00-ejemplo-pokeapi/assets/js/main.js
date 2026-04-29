const resultados = document.querySelector("#resultados");
const formBuscador = document.querySelector("#buscador");
const filtro = document.querySelector("#filtro");

const obtenerDatos = async (nombre) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    if (!response.ok) throw new Error(`Error ${response.status}`);

    return response.json();
};

const mostrarPokemon = async (nombre) => {
    resultados.textContent = "Loading...";

    try {
        const data = await obtenerDatos(nombre);

        const urlImg = data.sprites.front_default;

        resultados.textContent = "";

        const titulo = document.createElement("h2");
        titulo.textContent = data.name;
        titulo.classList.add("text-capitalize", "mt-3");

        const imagen = document.createElement("img");
        imagen.setAttribute("src", urlImg);
        imagen.setAttribute("alt", data.name);
        imagen.classList.add("img-fluid", "mb-5", "img-xl");

        resultados.append(titulo);
        resultados.append(imagen);

        const infoPoke = poderes(data);
        renderPoderes(infoPoke);
    } catch (error) {
        resultados.textContent = `Ups, algo salió mal: ${error.message}`;
    }
};

const poderes = (data) => {
    const movimientos = data.moves
        .slice(0, 4)
        .map((item) => item.move.name.replaceAll("-", " "));

    const habilidades = data.abilities.map((item) =>
        item.ability.name.replaceAll("-", " "),
    );

    return {
        movimientos,
        habilidades,
    };
};

const renderPoderes = (listaPoderes) => {
    const tituloHabilidades = document.createElement("h3");
    tituloHabilidades.textContent = "Habilidades";

    const listaHabilidades = document.createElement("ul");
    listaHabilidades.classList.add("list-group", "mb-4");

    for (let hab of listaPoderes.habilidades) {
        const elemento = document.createElement("li");
        elemento.textContent = hab;
        elemento.classList.add(
            "list-group-item",
            "text-capitalize",
            "text-center",
        );

        listaHabilidades.append(elemento);
    }

    const tituloMovimientos = document.createElement("h3");
    tituloMovimientos.textContent = "Movimientos";

    const listaMovimientos = document.createElement("ul");
    listaMovimientos.classList.add("list-group", "mb-4", "text-center");

    for (let mov of listaPoderes.movimientos) {
        const elemento = document.createElement("li");
        elemento.textContent = mov;
        elemento.classList.add("list-group-item", "text-capitalize");

        listaMovimientos.append(elemento);
    }

    resultados.append(tituloHabilidades);
    resultados.append(listaHabilidades);

    resultados.append(tituloMovimientos);
    resultados.append(listaMovimientos);
};

formBuscador.addEventListener("submit", (event) => {
    event.preventDefault();

    const consulta = filtro.value.trim().toLowerCase();

    if (!consulta) return;

    mostrarPokemon(consulta);
    filtro.value = "";
});
