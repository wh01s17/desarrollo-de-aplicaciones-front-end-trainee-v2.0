// Arrays
const productos = ["Manzana", "Pan", "Tofu"];

console.log(productos);
console.log(`Primero: ${productos[0]}`);
console.log(`Largo del arreglo: ${productos.length}`);

productos.pop();
console.log(`Despues de pop: ${productos}`);

productos.push("Arroz");
console.log(`Despues de push: ${productos}`);

// crea una copia de las posiciones 0 y 1 del arreglo, no incluye el 2
const copia = productos.slice(0, 2);
console.log(`slice(0, 2): ${copia}`);

productos.splice(1, 1, "Galletas");
console.log(`splice(1, 1, "Galletas"): ${productos}`);

productos.unshift("Naranja");
console.log(`Despues de unshift: ${productos}`);
productos.shift();
console.log(`Despues de shift: ${productos}`);

// For
// i viene de index
//                                   i += 2
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: ${productos[i]}`);
}

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
