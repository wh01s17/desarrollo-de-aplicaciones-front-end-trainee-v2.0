// Map
const usuarios = [
    { nombre: "Solange", apellido: "Lopez", id: 1 },
    { nombre: "Gabriel", apellido: "Diaz", id: 2 },
    { nombre: "Sylvia", apellido: "Soto", id: 3 },
];

const resumen = usuarios.map((u) => {
    return {
        nombreCompleto: `${u.nombre} ${u.apellido}`,
        id: u.id,
    };
});

console.log(resumen);
