// Fat Arrow Functions

// Tradicional
// function sumar(a, b) {
//     return a + b;
// }

// const sumar = function (a, b) {
//     return a + b;
// };

// Arrow
// const sumar = (a, b) => {
//     return a + b;
// };

const sumar = (a, b) => a + b;
const resultado = sumar(1, 3);
console.log("Suma: ", resultado);

// Con 1 parámetro, los paréntesis son opcionales
const doble = (n) => n * 2;

console.log("Doble: ", doble(3));
