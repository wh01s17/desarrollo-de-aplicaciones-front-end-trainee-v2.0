// Pipeline
const pedidos = [
    { cliente: "Ana", precio: 5000, estado: "completado" },
    { cliente: "Bruno", precio: 3000, estado: "pendiente" },
    { cliente: "Carla", precio: 8000, estado: "completado" },
    { cliente: "Diana", precio: 2000, estado: "cancelado" },
];

const promedio = pedidos
    .filter((p) => p.estado === "completado")
    .map((p) => p.precio)
    // _ nos permite saltar un parametro
    .reduce((sum, val, _, arr) => sum + val / arr.length, 0);

console.log("ticket promedio (completados): ", promedio);
