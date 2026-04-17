console.log("Redondeo");
console.log(Math.round(4.6));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));

console.log("Max y Min");
console.log(Math.max(10, 5, 20, 3));
console.log(Math.min(10, 5, 20, 3));

console.log("Random o Aleatorio");
// const numRandom = Math.random();
// console.log(numRandom);

// generamos un numero aleatorio entre 0 y 9
// const numero = Math.floor(Math.random() * 10);

// generamos un numero aleatorio entre 1 y 10
const numero = Math.floor(Math.random() * 10) + 1;
console.log(numero);

const min = 1;
const max = 25;

const aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Numero aleatorio entre ${min} y ${max}: ${aleatorio}`);
