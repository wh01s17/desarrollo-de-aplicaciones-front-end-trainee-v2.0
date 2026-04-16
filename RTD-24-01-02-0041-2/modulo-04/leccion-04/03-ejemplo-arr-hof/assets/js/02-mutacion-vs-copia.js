// Mutacion vs Copia
// 🔴 Destructivo
const frutas = ["manzana", "pera", "uva"];
frutas.push("kiwi");
console.log("push muta el arreglo: ", frutas);

// frutas.splice(1, 1, "platano");
frutas.splice(1, 1);
console.log("splice muta el arreglo: ", frutas);

// 🟢 Inmutables
const colores = ["rojo", "azul", "verde"];

const conAmarillo = [...colores, "Amarillo"];

// const primeros = colores.slice(1, 2);
const primeros = colores.slice(0, 2);

console.log("Original: ", colores);
console.log("Con spread", conAmarillo);
console.log("Con slice", primeros);
