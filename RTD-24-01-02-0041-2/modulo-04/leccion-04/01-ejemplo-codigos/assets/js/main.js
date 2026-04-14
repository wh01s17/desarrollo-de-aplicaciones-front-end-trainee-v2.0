const codigosUsados = [];
let intentos = 3;

// Validar rango
function esValido(numero) {
    return numero >= 1 && numero <= 5;
}

function yaExiste(lista, numero) {
    // for (let i = 0; i < lista.length; i++) {
    //     if (lista[i] === numero) {
    //         return true;
    //     }
    // }

    for (let valor of lista) {
        if (valor === numero) {
            return true;
        }
    }

    return false;
}

function pedirNumero() {
    let numero;

    while (true) {
        numero = +prompt("Ingresa un codigo (1 al 5):");

        if (!esValido(numero)) {
            alert("Codigo fuera de rango");
            continue;
        }

        return numero;
    }
}

function procesarIntento(numero, lista) {
    if (yaExiste(lista, numero)) {
        alert("Codigo repetido");
        return false;
    }

    lista.push(numero);
    return true;
}

function sistema() {
    while (intentos > 0) {
        const numero = pedirNumero();
        const agregado = procesarIntento(numero, codigosUsados);

        if (agregado) {
            intentos--;
            alert("Codigo ingresado correctamente");
        }
        console.log("Codigos usados: ", codigosUsados);
    }
    alert("Sistema bloqueado, itentos agotados");
}

// Ejecución
sistema();
