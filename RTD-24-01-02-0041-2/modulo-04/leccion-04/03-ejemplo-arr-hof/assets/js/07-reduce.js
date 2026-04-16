// Reduce
const precios = [1000, 2500, 500];

const total = precios.reduce((acc, curr) => acc + curr, 0);

console.log("Total: ", total);
