// filter
const personas = [
    { nombre: "Solange", edad: 22 },
    { nombre: "Pablo", edad: 16 },
    { nombre: "Raul", edad: 30 },
    { nombre: "David", edad: 14 },
];

const mayores = personas.filter((p) => p.edad >= 18);

console.log("Mayores de edad: ", mayores);
