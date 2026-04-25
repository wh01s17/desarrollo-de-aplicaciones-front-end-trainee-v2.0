// Sincronas vs Asíncronas
// Sincronas
console.log("A");
console.log("B");
console.log("C");

// Asíncronas
console.log("------------------");
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
