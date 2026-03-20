// contadorRef es una referencia al elemento del DOM que muestra el valor del contador
const contadorRef = document.getElementById("contador");

// contadorValue es una variable que almacena el valor numérico del contador, inicializado a partir del contenido de texto del elemento contadorRef, convertido a un número usando Number()
let contadorValue = Number(contadorRef.textContent);

// La función sumar incrementa el valor del contador en 1 y actualiza el contenido de texto del elemento contadorRef para reflejar el nuevo valor
function sumar() {
    // Se incrementa el valor del contador en 1
    // contadorValue = contadorValue + 1;

    // Permite sumar N
    // contadorValue += 1;

    // Permite sumar 1
    contadorValue++;

    // Se actualiza el contenido de texto del elemento contadorRef para mostrar el nuevo valor del contador
    contadorRef.textContent = contadorValue;
}

function restar() {
    // Verifica que el valor sea mayor a 0, para restar un numero y evitar numeros negativos
    if (contadorValue > 0) {
        contadorValue = contadorValue - 1;
        contadorRef.textContent = contadorValue;
    }
}
