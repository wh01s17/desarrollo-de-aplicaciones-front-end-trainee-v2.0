// Arrays
const productos = ["Manzana", "Pan", "Tofu"];

console.log(productos);
console.log(`Primero: ${productos[0]}`);
console.log(`Largo del arreglo: ${productos.length}`);

// Elimina el ultimo elemento del arreglo
productos.pop();
console.log(`Despues de pop: ${productos}`);

// Agrega un elemento al final del arreglo
productos.push("Arroz");
console.log(`Despues de push: ${productos}`);

// crea una copia de las posiciones 0 y 1 del arreglo, no incluye el 2
const copia = productos.slice(0, 2);
console.log(`slice(0, 2): ${copia}`);

productos.splice(1, 1, "Galletas");
console.log(`splice(1, 1, "Galletas"): ${productos}`);

// Agrega un elemento al inicio del arreglo
productos.unshift("Naranja");
console.log(`Despues de unshift: ${productos}`);

// Elimina el primer elemento de un arreglo
productos.shift();
console.log(`Despues de shift: ${productos}`);

// For
// i viene de index
//                                   i += 2
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: ${productos[i]}`);
}

// Mostrar todos los pares de 0 al 100
// for (let i = 0; i < 101; i += 2) {
//     console.log(i);
// }

// Mostrar todos los impares de 0 al 100
// for (let i = 1; i < 101; i += 2) {
//     console.log(i);
// }

console.log("==================");
for (let i = 0; i < productos.length; i++) {
    if (i % 2 === 0) {
        console.log(`Producto: ${productos[i]}`);
    }
}

// For...of
console.log("==================");
for (let prod of productos) {
    console.log(prod);
}

// Llenar array desde el usuario
console.log("==================");
const precios = [];

for (let i = 0; i < productos.length; i++) {
    const precioInput = +prompt(`Ingrese el precio de ${productos[i]}`);
    precios.push(precioInput);
}

for (let i = 0; i < productos.length; i++) {
    console.log(`${productos[i]}: $${precios[i]}`);
}

// Acumular y promediar
let total = 0;

for (let i = 0; i < precios.length; i++) {
    total += precios[i];

    //   0  = 0 + 1000
    // total += 1000;

    //  1000  = 1000 + 2000
    // total += 2000;

    //  3000  = 3000 + 3000
    // total += 3000;

    // total = 6000
}

console.log(`Acumulador: ${total}`);

const promedio = total / precios.length;

console.log(`Promedio: ${promedio}`);

// While
//                        0        1       2
// const productos = ["Manzana", "Pan", "Tofu"]
// conts precios = [500, 3000, 2500]

//                1
let indiceMayor = 0;

//           2
let indice = 1;

while (indice < precios.length) {
    //        2500      >   3000
    if (precios[indice] > precios[indiceMayor]) {
        //              1
        indiceMayor = indice;
    }
    indice++;
}

const precioMayor = precios[indiceMayor];
const productoMasCaro = productos[indiceMayor];
console.log(`El producto mas caro es: ${productoMasCaro} $${precioMayor}`);

// do - while
let descuento;

do {
    descuento = +prompt("Ingrese un descuento entre 1 y 50 (%)");
} while (descuento < 1 || descuento > 50);

const totalDescuento = total - (total * descuento) / 100;

// Formatear numeros

// Redondea decimales
console.log(`Promedio redondeado a 2 decimales: ${promedio.toFixed(2)}`);
console.log(`Promedio redondeado: ${Math.round(promedio)}`);

// Formato de monedas
const formatoCLP = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
});

console.log(`Formato CLP: ${formatoCLP.format(total)}`);

// DOM
let filas = "";

for (let i = 0; i < productos.length; i++) {
    filas += `
    <tr>
        <td>${i + 1}</td>
        <td>${productos[i]}</td>
        <td>${formatoCLP.format(precios[i])}</td>
    </tr>`;
}

const html = `
<h2 class="mb-3">Resumen de la tienda</h2>

                <table class="table table-striped table-bordered table-hover">
                    <thead class="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filas}
                    </tbody>
                </table>
`;

document.getElementById("resultados").innerHTML = html;
