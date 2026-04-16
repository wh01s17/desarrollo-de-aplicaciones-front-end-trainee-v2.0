// forEach
const pedidos = [
    {
        cliente: "Solange",
        producto: "Notebook",
    },
    {
        cliente: "Jorge",
        producto: "Mouse",
    },
    {
        cliente: "Luis",
        producto: "Teclado",
    },
];

// forEach no retorna NADA
pedidos.forEach((pedido) => {
    console.log(`${pedido.cliente} pidió ${pedido.producto}`);
});
