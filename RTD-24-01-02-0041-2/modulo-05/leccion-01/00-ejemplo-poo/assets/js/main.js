// Objeto literales
const persona = {
    nombre: "Solange",
    edad: 27,
    ciudad: "Santiago",
};

console.log(persona.nombre);
console.log(persona["ciudad"]);

persona.email = "email@email.com";
persona["colorFav"] = "verde";
persona["colorFav"] = "";

// Elimina una propiedad
delete persona.colorFav;

for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Clases
// A diferencia de la variables (camelCase), los nombres de las clases, se deben declarar utilizando PascalCase
class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.leido = false;
    }

    mostrarDatos() {
        console.log("--- Datos del libro ---");
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Año: ${this.anio}`);
        console.log(`Leido: ${this.leido ? "Si" : "No"}`);
    }

    marcarLeido() {
        this.leido = true;
        console.log(`"${this.titulo}" fue marcado como leido`);
    }
}

const libro1 = new Libro("Así habló Zaratustra", "Friedrich Nietzsche", 1883);

// Muestra los datos del libro
libro1.mostrarDatos();
// Marca el libro como leido (cambia la propiedad leido a true)
libro1.marcarLeido();
// Ahora "leido" es "Si"
libro1.mostrarDatos();

const libro2 = new Libro("El señor de los anillos", "J.R.R. Tolkien", 1954);
libro2.mostrarDatos();
libro2.marcarLeido();
libro2.mostrarDatos();

// Herencia
class LibroDigital extends Libro {
    constructor(titulo, autor, anio, formato) {
        super(titulo, autor, anio);
        this.formato = formato;
    }

    descargar() {
        console.log(
            `Descargando "${this.titulo}" en formato ${this.formato}...`,
        );
    }
}

const libro3 = new LibroDigital("Valparaíso", "Sergio Larraín", 1991, "PDF");
libro3.marcarLeido();
libro3.mostrarDatos();
libro3.descargar();
