const usuario = prompt("Ingrese su nombre:");
const producto = prompt("Producto:");
const precioUnitario = Number(prompt("Valor de producto:"));
const cantidad = Number(prompt("Cantidad de productos:"));

// Usamos mayúsculas para constantes conocidas antes de la ejecución
const IVA = 0.19;

const subtotal = precioUnitario * cantidad;
const montoIva = subtotal * IVA;
const total = subtotal + montoIva;

// const fechaHoy = new Date().toLocaleDateString("es-CL");
const fechaHoy = new Date().toLocaleDateString("es-CL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
});

const encabezado = `
    <p class="text-muted text-end">Fecha: ${fechaHoy}</p>
    <h5>Cliente: ${usuario}</h5>
    <hr />`;

const tablaProductos = `
<table class="table table-striped">
    <thead>
        <tr>
                                        <th>Producto</th>
                                        <th class="text-center">Cant.</th>
                                        <th class="text-end">P. Unit.</th>
                                        <th class="text-end">Subtotal</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>${producto}</td>
                                        <td class="text-center">${cantidad}</td>
                                        <td class="text-end">$${precioUnitario}</td>
                                        <td class="text-end">$${subtotal}</td>
                                    </tr>
                                </tbody>
                            </table>`;

const resumenMontos = `<hr />
                            <div class="d-flex justify-content-between">
                                <span>Subtotal:</span>
                                <span>$${subtotal}</span>
                            </div>

                            <div class="d-flex justify-content-between">
                                <span>IVA (19%):</span>
                                <span>$${montoIva}</span>
                            </div>

                            <div
                                class="d-flex justify-content-between mt-2 fw-bold"
                            >
                                <span>Total:</span>
                                <span>$${total}</span>
                            </div>
                        </div>

                        <div class="card-footer text-center text-muted">
                            Gracias vuelva prontos
                        </div>`;

const boleta = encabezado + tablaProductos + resumenMontos;
document.writeln(boleta);
