// Busquedas
// Primitivos
const numeros = [1, 0, NaN, 5];
console.log("indexOf(NaN):", numeros.indexOf(NaN));

console.log("includes(NaN):", numeros.includes(NaN));

// Objetos
const usuarios = [
    {
        id: 1,
        nombre: "Solange",
    },
    {
        id: 2,
        nombre: "Luis",
    },
    {
        id: 3,
        nombre: "Sebastián",
    },
];

const luis = usuarios.find((valor) => valor.nombre === "Luis");
console.log(luis);
