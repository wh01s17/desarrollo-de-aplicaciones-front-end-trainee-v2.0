// Destructuring de objetos
// nos permite extraer las propiedades de un objeto como variables independientes
const libro = {
    titulo: "Desolación",
    autor: "Gabriela Mistral",
    anio: 1922,
};

// titulo: nombreLibro, nos permite renombrar la variable que almacenará  el dato
const { titulo: nombreLibro, autor, anio } = libro;
console.log(nombreLibro, autor, anio);

// Spread operator
// Objetos
const libroEditado = {
    ...libro,
    // modificamos valor del obj original
    anio: 2012,
    // Agregamos nueva clave:valor
    formato: "PDF",
};

console.log(libroEditado);

// const numeros = [1, 2, 3];
// const copiaNumeros = numeros;
// copiaNumeros[0] = 22;
// console.log("CopiaNumeros:", copiaNumeros);
// console.log("numeros: ", numeros);

const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5];

masNumeros[0] = 2123123512;
console.log("Numeros: ", numeros);
console.log("MasNumeros: ", masNumeros);

// Set
const frutas = new Set();
frutas.add("manzana");
frutas.add("pera");
frutas.add("manzana");
frutas.add("naranja");

console.log("Frutas: ", frutas);

console.log("Tiene pera?: ", frutas.has("pera"));

console.log("Tamaño:", frutas.size);

frutas.delete("pera");

console.log('Frutas despues de delete "pera": ', frutas);

// Eliminar duplicados de un array
// Esta convirtiendo un arreglo con repetidos a un set y luego el set en un nuevo arreglo pero sin repetidos
const repetidos = [1, 2, 2, 3, 3, 4];

const setArreglo = new Set(repetidos);

const noRepetidos = [...setArreglo];

//Map
const notas = new Map();
notas.set("Ana", 6.5);
notas.set("Sebastian", 5.5);
notas.set("Gabriel", 4.0);

console.log("Nota de Ana: ", notas.get("Ana"));
console.log("Existe la clave Bruno?: ", notas.has("Bruno"));
console.log("Tamaño: ", notas.size);

for (let [clave, valor] of notas) {
    console.log(`${clave}: ${valor}`);
}

// Promise
function pedirMensaje() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje recibido desde el servidor");
        }, 1000);
    });
}

console.log("Utilizando then()");
pedirMensaje().then((respuesta) => {
    console.log("then() dice: ", respuesta);
});

// async/await
const sleep = (ms) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });

async function mostrarMensaje() {
    console.log("Utilizando async/await");
    await sleep(5000);
    const respuesta = await pedirMensaje();
    console.log("await dice: ", respuesta);
}

mostrarMensaje();
