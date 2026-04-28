// aync/await
function esperar(mensaje) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mensaje), 500);
    });
}

// console.log(esperar("Hola Mundo"));

// Recordatorio then
esperar("Hola Mundo").then((msg) => console.log(msg));

// Misma logica pero con async/await
async function ejemploAsync() {
    const msg = await esperar("Hola con await");
    console.log(msg);
}

ejemploAsync();

// Manejo de errores
function operacionRiesgosa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Algo explotó 💥")), 500);
    });
}

async function ejemploError() {
    try {
        const resultado = await operacionRiesgosa();
        console.log("Resultado:", resultado);
    } catch (error) {
        console.error("Error capturado!: ", error.message);
    } finally {
        console.log("Fin de ejemploError");
    }
}

ejemploError();
