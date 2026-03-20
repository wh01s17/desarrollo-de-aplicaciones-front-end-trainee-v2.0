function irArriba() {
    // window es un objeto global, que representa la ventana del navegador.

    // Tiene un metodo o función, llamado scrollTo(), que nos permite desplazar la página a una posición específica
    window.scrollTo({
        top: 10,
        behavior: "smooth",
    });
}
