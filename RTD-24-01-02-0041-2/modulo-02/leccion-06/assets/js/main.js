// $(document).ready(function() {
// })

$(function () {
    console.log("jQuery cargado correctamente");

    $("#btn-cambiar-color").click(function () {
        $("#titulo").toggleClass("rojo negro");
    });

    $("#btn-cambiar-texto").click(function () {
        $("#titulo").text("Texto cambiado con jQuery");
    });

    // No modificar directamente el CSS desde el JS
    // $("#btn-texto-negrita").click(function () {
    //     $("#titulo").css("font-weight", "bold");
    // });

    $("#btn-texto-negrita").click(function () {
        $("#titulo").html("<strong>Texto en negrita con jQuery</strong>");
    });

    // Lista

    $("#btn-ocultar-lista").click(function () {
        $("#lista").toggle();

        if ($("#lista").is(":visible")) {
            $("#btn-ocultar-lista").text("Ocultar lista");
        } else {
            $("#btn-ocultar-lista").text("Mostrar lista");
        }
    });

    $("#btn-agregar").click(function () {
        const cantidad = $("#lista").children().length + 1;

        $("#lista").append("<li>Elemento " + cantidad + "</li>");
    });

    $("#btn-agregar-inicio").click(function () {
        const cantidad = $("#lista").children().length + 1;

        $("#lista").prepend("<li>Elemento " + cantidad + " al principio</li>");
    });

    $("#btn-eliminar").click(function () {
        $("#lista li").last().remove();
    });
});

// Tooltip Bootstrap
const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);
