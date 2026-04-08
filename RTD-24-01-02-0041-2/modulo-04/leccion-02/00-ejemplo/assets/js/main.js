// const radio = 5;
// //                        radio ** 2
// const area = Math.PI * Math.pow(radio, 2);
// console.log(Math.round(area));

// ENTRADA
let nombreInput = prompt("Ingrese su nombre");
// while (!nombreInput) {
//     nombreInput = prompt("Error, ingrese su nombre");
// }

const edad = +prompt("Ingrese su edad");
const cantEntradas = Number(prompt("Cuantas entradas?"));

const nombre = nombreInput || "Invitado";

//COMPUTO O PROCESO
let precio;
let tipo;

if (edad < 12) {
    precio = 3000;
    tipo = "Infantil";
} else if (edad >= 65) {
    precio = 3500;
    tipo = "Senior";
} else {
    precio = 5000;
    tipo = "General";
}

// let mensaje;
// if (edad < 18) {
//     mensaje = "Debe ir acompañado de un adulto"
// } else {
//     mensaje = "Disfrute la película"
// }

const mensaje =
    edad < 18 ? "Debe ir acompañado de un adulto" : "Disfrute la película";

const subtotal = precio * cantEntradas;

//                        true           true
// tiene2x1 = true

//                        false           true
// tiene2x1 = false
const tiene2x1 = cantEntradas % 2 === 0 && cantEntradas > 0;

// En el caso de que tiene2x1 sea verdadero subtotal / 2
// Sino descuento vale 0
const descuento = tiene2x1 ? subtotal / 2 : 0;

const total = subtotal - descuento;

const puntos = cantEntradas ** 2;

// SALIDA
const cardHeader = `
<div class="card-header text-center">
    <h1 class="mb-2">Entrada al Cine</h1>
    <p>Hola , ${nombre}</p>
</div>
`;

const cardCliente = `
<div class="card-body">
    <h2 class="card-title">Datos del Cliente</h2>
    <div class="d-flex justify-content-between mb-2">
        <span>Edad</span>
        <span>${edad}</span>
    </div>

    <div class="d-flex justify-content-between">
        <span>Categoria</span>
        <span class="badge text-bg-secondary">${tipo}</span>
    </div>
</div>`;

const cardEntradas = `
        <div class="card-body">
            <h2 class="card-title">Detalle de entradas</h2>
            <div class="d-flex justify-content-between mb-2">
                <span>Cantidad</span>
                <span>${cantEntradas}</span>
            </div>

            <div class="d-flex justify-content-between">
                <span>Precio unitario</span>
                <span>$${precio}</span>
            </div>

            <div class="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>$${subtotal}</span>
            </div>
        </div>`;

const cardPromo = tiene2x1
    ? `
<div class="card-body text-success">
    <div class="d-flex justify-content-between">
        <span>Promo 2x1</span> <span>-$${descuento}</span>
    </div>
</div>
`
    : "";

const cardTotal = `<div class="card-body text-center">
            <h3 class="card-title">$${total}</h3>
            <p class="card-text fst-italic">${mensaje}</p>
            <span class="badge text-bg-info">Puntos acumulados: ${puntos}</span>
        </div>`;

const cardFooter = `
<div class="card-footer text-center text-body">
    Gracias por tu compra
</div>
`;

const resultado = document.getElementById("resultado");

resultado.innerHTML = `
<div class="card shadow">
    ${cardHeader}
    ${cardCliente}
    ${cardEntradas}
    ${cardPromo}
    ${cardTotal}
    ${cardFooter}
</div>
`;
