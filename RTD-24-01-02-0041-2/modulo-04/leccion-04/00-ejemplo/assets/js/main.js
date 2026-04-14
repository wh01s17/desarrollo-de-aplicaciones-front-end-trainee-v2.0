// Paso 1
// const edad = +prompt("Ingresa tu edad");
// let precio = 0;

// if (edad < 12) {
//     precio = 3000;
// } else if (edad < 65) {
//     precio = 5000;
// } else {
//     precio = 2000;
// }
// console.log("Precio: ", precio);

// Paso 2
// function calcularPrecio(edadParam) {
//     if (edadParam < 12) {
//         return 3000;
//     } else if (edadParam < 65) {
//         return 5000;
//     } else {
//         return 2000;
//     }
// }

// function obtenerMensaje(precioParam) {
//     return `El precio de tu entrada es $${precioParam}`;
// }

// const edad = +prompt("Ingresa tu edad");
// let precio = calcularPrecio(edad);
// let mensaje = obtenerMensaje(precio);
// console.log(mensaje);

// Paso 3
// function esEdadValida(edadParam) {
//     // if (edad > 0 && edad < 120) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return edadParam > 0 && edadParam < 120;
// }

// function calcularPrecio(edadParam) {
//     if (edadParam < 12) {
//         return 3000;
//     } else if (edadParam < 65) {
//         return 5000;
//     } else {
//         return 2000;
//     }
// }

// function obtenerMensaje(precioParam) {
//     return `El precio de tu entrada es $${precioParam}`;
// }

// let edad;

// while (true) {
//     edad = +prompt("Ingresa tu edad");

//     if (esEdadValida(edad)) {
//         break;
//     } else {
//         alert("Edad inválida");
//     }
// }

// let precio = calcularPrecio(edad);
// let mensaje = obtenerMensaje(precio);
// console.log(mensaje);

// Paso 4 y final
function esEdadValida(edadParam) {
    return edadParam > 0 && edadParam < 120;
}

function calcularPrecio(edadParam) {
    if (edadParam < 12) return 3000;
    if (edadParam < 65) return 5000;
    return 2000;
}

function obtenerMensaje(precioParam) {
    return `Total a pagar $${precioParam}`;
}

function funcionPrincipal() {
    let edad;

    while (true) {
        edad = +prompt("Ingresa tu edad");

        if (esEdadValida(edad)) {
            break;
        } else {
            alert("Edad inválida");
        }
    }

    let precio = calcularPrecio(edad);
    let mensaje = obtenerMensaje(precio);
    console.log(mensaje);
}

funcionPrincipal();
