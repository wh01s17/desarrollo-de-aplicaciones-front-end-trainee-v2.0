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

function render(listaParam) {
    const resultado = document.getElementById("resultados");
    resultado.textContent = "";

    if (listaParam.length === 0) {
        resultado.textContent = "No hay resultados :c";
        return;
    }

    const lista = document.createElement("ul");

    for (let producto of listaParam) {
        const elemento = document.createElement("li");
        elemento.textContent = producto.nombre;
        lista.appendChild(elemento);
    }

    resultado.appendChild(lista);
}

entrada.addEventListener("input", function () {
    const texto = entrada.value.toLowerCase();

    const filtrada = productos.filter((p) =>
        p.nombre.toLowerCase().includes(texto),
    );

    render(filtrada);
});

render(productos);
