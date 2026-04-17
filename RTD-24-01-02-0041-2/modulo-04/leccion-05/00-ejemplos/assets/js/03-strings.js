const saludo = "Hola Mundo";

console.log(saludo.length);
// Obtener primera letra
console.log(saludo[0]);

// Obtener ultima letra
console.log(saludo[saludo.length - 1]);

// Mayúscula
console.log(saludo.toUpperCase());

// Minuscula
console.log(saludo.toLowerCase());

// includes
console.log(saludo.includes("Mundo"));
console.log(saludo.includes("mundo"));

// Podemos recorrer un string con un for
for (let letra of "hola") {
    console.log(letra);
}

// split
const frase = "rojo-verde-azul";

// divide todo el string en un arreglo de letras
// const colores = frase.split("");
const colores = frase.split("-");

console.log(colores);

// Une todo un arreglo de strings en una unica cadena de caracteres
const unido = colores.join(" ");
console.log(unido);
