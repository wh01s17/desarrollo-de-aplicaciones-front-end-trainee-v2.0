const inputNombre = document.getElementById("inputNombre");
const btnAgregar = document.getElementById("btnAgregar");
const listaSegura = document.getElementById("listaSegura");
const listaInsegura = document.getElementById("listaInsegura");

function procesarTexto(texto) {
    return {
        nombre: texto,
        cantCaracteres: texto.length,
    };
}

btnAgregar.addEventListener("click", function () {
    const valor = inputNombre.value;

    // Early return
    if (valor === "") return;

    const datos = procesarTexto(valor);
    console.log(datos);

    agregarInseguro(datos.nombre, datos.cantCaracteres);
    agregarSeguro(datos.nombre, datos.cantCaracteres);

    inputNombre.value = "";
});

function agregarInseguro(nombre, caracteres) {
    listaInsegura.innerHTML +=
        '<div class="card mb-2 border-danger">' +
        '   <div class="card-body py-2">' +
        `       <b>${nombre}</b>` +
        '       <span class="badge bg-danger ms-3">' +
        `${caracteres} chars` +
        "       </span>";
    "   </div>" + "</div>";
}

function agregarSeguro(nombre, caracteres) {
    const card = document.createElement("div");
    card.className = "card mb-2 border-success";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body py-2";

    const titulo = document.createElement("b");
    // textContent escapa cualquier HTML
    titulo.textContent = nombre;

    const info = document.createElement("span");
    info.className = "badge bg-success ms-3";
    info.textContent = caracteres + " chars";

    cardBody.appendChild(titulo);
    cardBody.appendChild(info);
    card.appendChild(cardBody);
    listaSegura.appendChild(card);
}
