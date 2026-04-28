function saludar(nombre, callback) {
    console.log(`Hola ${nombre}`);

    callback();
}

function despedir() {
    console.log("Adios!");
}

function restar() {
    console.log(1 - 2);
}

saludar("Sebastian", despedir);

saludar("Sebastian", restar);

saludar("Solange", function () {
    console.log("Solange te pillamos");
});

saludar("Gabriel", () => console.log("Chao!"));

console.log("=====================================");

function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

function mostrar(total) {
    console.log(`La suma es: ${total}`);
}

sumar(2, 8, mostrar);

sumar(3, 4, (total) => {
    console.log(`La suma es: ${total}`);
});

console.log("=====================================");

function avisarEnTresSegundos(callback) {
    console.log("Esperando 3 segundos...");
    setTimeout(() => {
        callback("Pasaron 3 segundos!");
    }, 3000);
}

avisarEnTresSegundos((mensaje) => {
    console.log(mensaje);
});

console.log("=====================================");

function dividir(a, b, callbackOk, callbackError) {
    if (b === 0) {
        callbackError("No se puede dividir por 0");
        return;
    }

    callbackOk(a / b);
}

const success = (resultado) => console.log(`Resultado: ${resultado}`);
const failure = (error) => console.log(`Error: ${error}`);
dividir(10, 2, success, failure);

dividir(
    10,
    0,
    (resultado) => console.log(`Resultado: ${resultado}`),
    (error) => console.log(`Error: ${error}`),
);

console.log("=====================================");

/* 
callback hell

login(user, (user) => {
    getProfile(user, (profile) => {
        getPosts( profile, (posts) => {
            console.log(posts)
        })
    })
}
*/
