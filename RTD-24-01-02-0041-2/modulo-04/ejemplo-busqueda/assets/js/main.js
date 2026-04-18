const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 750000,
        stock: 10,
    },
    {
        id: 2,
        nombre: "Mouse",
        precio: 15000,
        stock: 50,
    },
    {
        id: 3,
        nombre: "Teclado",
        precio: 30000,
        stock: 30,
    },
    {
        id: 4,
        nombre: "Monitor",
        precio: 180000,
        stock: 15,
    },
];

const entrada = document.getElementById("entrada");
const resultados = document.getElementById("resultados");

function render(listaProductos) {
    resultados.textContent = "";

    if (listaProductos.length === 0) {
        resultados.textContent = "No hay resultados :c";
        return;
    }

    const lista = document.createElement("ul");

    for (let producto of listaProductos) {
        const elemento = document.createElement("li");
        elemento.textContent = producto.nombre;
        lista.appendChild(elemento);
    }

    resultados.appendChild(lista);
}

entrada.addEventListener("input", () => {
    const texto = entrada.value.toLowerCase();

    const filtrada = productos.filter((p) =>
        p.nombre.toLowerCase().includes(texto),
    );

    render(filtrada);
});

render(productos);
