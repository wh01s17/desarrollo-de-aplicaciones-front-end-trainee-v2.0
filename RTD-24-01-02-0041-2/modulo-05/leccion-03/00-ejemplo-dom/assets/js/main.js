// 1 -  Seleccionar los nodos
const form = document.querySelector("#form");
const inputNombre = document.querySelector("#nombre");
const inputVeces = document.querySelector("#veces");
const inputColor = document.querySelector("#color");
const checkInvertir = document.querySelector("#invertir");
const btnModo = document.querySelector("#btn-modo");
const btnQuitar = document.querySelector("#btn-quitar");
const resultado = document.querySelector("#resultados");

// 2 - Escuchar
form.addEventListener("submit", (e) => {
    // Evita que se recargue la pagina, luego de un submit de un formulario
    e.preventDefault();

    // 3 - Leer y transformar
    const nombre = inputNombre.value;
    const veces = +inputVeces.value;
    const color = inputColor.value;
    const invertir = checkInvertir.checked;

    const texto = invertir ? nombre.split("").reverse().join("") : nombre;

    // limpiar el contenedor de resultados
    resultado.textContent = "";

    // 4 - Crear
    for (let i = 0; i < veces; i++) {
        const parrafo = document.createElement("p");
        parrafo.textContent = `Hola, ${texto}`;
        parrafo.classList.add("saludo", "saludo--destacado");

        // Desde JS podemos editar los estilos CSS directamente
        // ⚠️ No modificar los estilos de esta manera, ya que altera la responsabilidad del JS
        parrafo.style.backgroundColor = color;

        // 5 - Insertar el nodo dentro del contenedor resultados
        resultado.append(parrafo);
    }
});

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("pagina--oscuro");
});

btnQuitar.addEventListener("click", () => {
    const saludos = document.querySelectorAll(".saludo");
    saludos.forEach((s) => s.classList.remove("saludo--destacado"));
});
