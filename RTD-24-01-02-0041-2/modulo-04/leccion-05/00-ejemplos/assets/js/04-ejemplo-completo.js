const cantidadAlumnos = +prompt("Cuantos alumnos quieres registrar");

const listaAlumnos = [];

for (let i = 0; i < cantidadAlumnos; i++) {
    let numero = i + 1;

    alert("Alumno " + numero);

    const nombre = prompt(`Nombre del alumno ${numero}`);
    const nota = +prompt(`Nota del alumno ${numero}`);

    const alumno = {
        nombre,
        nota,
    };

    listaAlumnos.push(alumno);
}

// let sumaNotas = 0;

// for (let elemento of listaAlumnos) {
//     sumaNotas += elemento["nota"];
// }

let sumaNotas = listaAlumnos.reduce((suma, curr) => suma + curr["nota"], 0);

// const calcularPromedio = (suma, cantidad) => {
//     return suma / cantidad;
// };

const calcularPromedio = (suma, cantidad) => suma / cantidad;

const promedioFinal = calcularPromedio(sumaNotas, cantidadAlumnos);

console.log(promedioFinal);

const contarVocales = (texto) => {
    const vocales = "aeiou";
    let contador = 0;

    for (let letra of texto) {
        if (vocales.includes(letra.toLowerCase())) {
            contador++;
        }
    }

    return contador;
};

const palabra = "hola";

console.log(contarVocales(palabra));
