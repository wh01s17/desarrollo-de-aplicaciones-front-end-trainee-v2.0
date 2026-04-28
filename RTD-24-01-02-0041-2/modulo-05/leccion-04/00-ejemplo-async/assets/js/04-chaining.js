// Encadenamiento (chanining)
function pasoAsincrono(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Terminó ${nombre}`);
            resolve(nombre);
        }, ms);
    });
}

pasoAsincrono("Paso A", 1500)
    .then(() => pasoAsincrono("Paso B", 1500))
    .then(() => pasoAsincrono("Paso C", 1500))
    .then(() => console.log("Todos los pasos listos"))
    .catch((error) => console.log(`Algo falló: ${error}`));
