class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.leido = false;
    }

    mostrar() {
        console.log("--- Datos del libro ---");
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año: ${this.anio}`);
    }

    marcarLeido() {
        this.leido = true;
        console.log(`El libro ${this.titulo}, se ha marcado como leido`);
    }
}

class LibroDigital extends Libro {
    constructor(titulo, autor, anio, formato) {
        super(titulo, autor, anio);
        this.formato = formato;
    }

    // Sobrescritura (Override)
    // Redefinimos el metodo de la clase padre
    mostrar() {
        super.mostrar();
        console.log(`Formato: ${this.formato}`);
    }
}

const libro1 = new Libro("Así habló Zaratustra", "Friedrich Nietzsche", 1883);
libro1.mostrar();

const ebook = new LibroDigital("Papelucho", "Marcela Paz", 1985, "PDF");

ebook.mostrar();
