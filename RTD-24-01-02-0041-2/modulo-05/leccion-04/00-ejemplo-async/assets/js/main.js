// Promesas
// Una Promesa es un objeto que representa el resultado futuro de una operación asíncrona.

// Tiene 3 estados:
// - pending: en proceso
// - fulfilled: se cumplió con éxito (resolve)
// - rejected: falló (reject)

const promesaOk = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos listos ✅");
    }, 1000);
});

promesaOk
    .then((valor) => console.log(`Éxito: ${valor}`))
    .catch((error) => console.log(`Error: ${error}`))
    .finally(() => console.log("Operación finalizada"));

const promesaFail = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Falló la conexión ❌");
    }, 1500);
});

promesaFail
    .then((valor) => console.log(`Éxito: ${valor}`))
    .catch((error) => console.log(`Error: ${error}`));

function pedirNumeroSuerte() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 10); // 0-9

            if (numero >= 5) {
                resolve(`Número de la suerte: ${numero}`);
            } else {
                reject(`Número bajo: ${numero}`);
            }
        }, 800);
    });
}

pedirNumeroSuerte()
    .then((msg) => console.log("🎊", msg))
    .catch((msg) => console.log("😢", msg));

// Promesas que devuelven un objeto
class Persona {
    constructor(nombre, apellido, edad, ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

function consultarPersona() {
    console.log("Creando promesa");
    const promesa = new Promise((resolve, reject) => {
        console.log("Esperando respuesta...");

        setTimeout(() => {
            const persona = new Persona("David", "Parada", 30, "Valparaíso");

            resolve(persona);
        }, 2000);
    });

    console.log("Registrando promesa");
    return promesa;
}

consultarPersona().then((persona) => {
    console.log("RESPUESTA:", persona);
});
