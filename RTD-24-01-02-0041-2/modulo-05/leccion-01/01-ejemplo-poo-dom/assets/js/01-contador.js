// Contador
class Contador {
    constructor(valor) {
        this.valor = valor;
    }

    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    reiniciar() {
        this.valor = 0;
    }
}

const contador = new Contador(15);
const contadorValor = document.getElementById("contador-valor");
const btnIncrementar = document.getElementById("btn-incrementar");
const btnDecrementar = document.getElementById("btn-decrementar");
const btnReiniciar = document.getElementById("btn-reiniciar");

//                                    15
contadorValor.textContent = contador.valor;

btnIncrementar.addEventListener("click", () => {
    contador.incrementar();
    contadorValor.textContent = contador.valor;
});

btnDecrementar.addEventListener("click", () => {
    contador.decrementar();
    contadorValor.textContent = contador.valor;
});

btnReiniciar.addEventListener("click", () => {
    contador.reiniciar();
    contadorValor.textContent = contador.valor;
});
