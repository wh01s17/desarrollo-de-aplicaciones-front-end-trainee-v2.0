// Spred y Rest
// spread
const a = [1, 2];
const b = [3, 4];

const fusion = [...a, ...b];

console.log("spread fusion: ", fusion);

const nums = [3, 5, 1];
console.log("Max con spread", Math.max(...nums));

// rest
const mostrar = (primero, ...resto) => {
    console.log("primero: ", primero);
    console.log("resto: ", resto);
};

mostrar("Hola", "Mundo", "!", "Sylvia", "Luis");
