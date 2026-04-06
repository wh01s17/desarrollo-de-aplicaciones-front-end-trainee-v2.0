// const nombre = "Solange";
// const apellido = "Leiva";
// const edad = 25;

// document.writeln("<h2>Hola " + nombre + " " + apellido + "</h2>");
// document.writeln(`<h2>Hola ${nombre} ${apellido} edad ${edad} </h2>`);

const destino = "Valdivia";
const valorPorDia = 15285;
const dias = 5;

const total = dias * valorPorDia;
const valorSemana = valorPorDia * 7;

document.writeln(`<p>Destino: ${destino}</p>`);
document.writeln(`<p>Precio por dia: $${valorPorDia}</p>`);
document.writeln(`<p>Cantidad de días: ${dias}</p>`);
document.writeln(`<p>Costo total: $${total}</p>`);

const nombre = prompt("Ingrese su nombre:");
const presupuesto = Number(prompt("Ingresa tu presupuesto:"));

const diferencia = presupuesto - total;

document.writeln(
    `<p>Hola ${nombre}, el viaje a ${destino} cuesta $${total}</p>`,
);

document.writeln(
    `<p>Tu prespuesto es ${presupuesto} y la diferencia es $${diferencia}</p>`,
);
