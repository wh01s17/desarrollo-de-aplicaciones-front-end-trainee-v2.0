// function restOperator (...params) {
//     for (let p of params) {
//         console.log(p)
//     }
// }

// restOperator(1,2,3,4,52,3456,24536)

// promise-all
function tarea(nombre, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Terminó ${nombre}`);
            resolve(nombre);
        }, ms);
    });
}

async function correrEnParalelo() {
    const resultados = await Promise.all([
        tarea("Tarea 1", 2000),
        tarea("Tarea 2", 2000),
        tarea("Tarea 3", 2000),
        tarea("Tarea 4", 2000),
        tarea("Tarea 5", 2000),
        tarea("Tarea 6", 2000),
        tarea("Tarea 7", 2000),
    ]);

    console.log("Resultados:", resultados);
}

correrEnParalelo();
