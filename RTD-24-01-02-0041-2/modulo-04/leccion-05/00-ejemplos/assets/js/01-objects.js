const producto = {
    nombre: "Manzana",
    precio: 2000,
    disponible: true,
};

// nombreObj["nombreClave"]
console.log(producto["nombre"]);
console.log(producto["disponible"]);

// nombreObj.nombreClave
console.log(producto.nombre);
console.log(producto.precio);

producto.color = "Verde";
producto["codigo"] = "asdf1234";

console.log("rut" in producto);
console.log("codigo" in producto);

for (let clave in producto) {
    console.log(`${clave} : ${producto[clave]}`);
}
