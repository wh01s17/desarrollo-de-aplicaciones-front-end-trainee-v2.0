class Cronometro {
    constructor() {
        this.inicio = Date.now();
    }

    mostrarTiempo() {
        const segundos = Math.floor((Date.now() - this.inicio) / 1000);
        return segundos;
    }

    reiniciar() {
        this.inicio = Date.now();
    }
}

const cronometro = new Cronometro();
const cronometroValor = document.getElementById("cronometro-valor");
const btnTiempo = document.getElementById("btn-tiempo");
const btnReinciarCrono = document.getElementById("btn-reiniciar-crono");
const horaCreacion = document.getElementById("hora-creacion");

const renderHora = () =>
    (horaCreacion.textContent = new Date(
        cronometro.inicio,
    ).toLocaleTimeString());

btnTiempo.addEventListener("click", () => {
    const segundos = cronometro.mostrarTiempo();
    cronometroValor.textContent = segundos;
});

btnReinciarCrono.addEventListener("click", () => {
    cronometro.reiniciar();
    renderHora();
    cronometroValor.textContent = 0;
});

renderHora();
