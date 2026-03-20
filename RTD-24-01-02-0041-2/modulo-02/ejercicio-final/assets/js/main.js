const peliculas = [
    {
        id: 1,
        titulo: "Inception",
        anio: 2010,
        genero: "Ciencia Ficcion",
        director: "Christopher Nolan",
        rating: 8.8,
        duracion: "2h 28min",
        sinopsis:
            "Un ladron que roba secretos corporativos a traves de la tecnologia de los suenos recibe la tarea inversa: implantar una idea en la mente de un CEO.",
        imagen: "https://picsum.photos/seed/inception/400/250",
        reparto: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    },
    {
        id: 2,
        titulo: "The Matrix",
        anio: 1999,
        genero: "Ciencia Ficcion",
        director: "Lana y Lilly Wachowski",
        rating: 8.7,
        duracion: "2h 16min",
        sinopsis:
            "Un programador descubre que la realidad tal como la conocemos es una simulacion creada por maquinas, y se une a la rebelion para liberar a la humanidad.",
        imagen: "https://picsum.photos/seed/matrix/400/250",
        reparto: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    },
    {
        id: 3,
        titulo: "Interstellar",
        anio: 2014,
        genero: "Ciencia Ficcion",
        director: "Christopher Nolan",
        rating: 8.6,
        duracion: "2h 49min",
        sinopsis:
            "Un grupo de exploradores viaja a traves de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.",
        imagen: "https://picsum.photos/seed/interstellar/400/250",
        reparto: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    },
    {
        id: 4,
        titulo: "Pulp Fiction",
        anio: 1994,
        genero: "Crimen",
        director: "Quentin Tarantino",
        rating: 8.9,
        duracion: "2h 34min",
        sinopsis:
            "Las vidas de dos sicarios, un boxeador, la esposa de un gangster y dos bandidos se entrelazan en cuatro historias de violencia y redencion.",
        imagen: "https://picsum.photos/seed/pulpfiction/400/250",
        reparto: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    },
    {
        id: 5,
        titulo: "El Padrino",
        anio: 1972,
        genero: "Crimen",
        director: "Francis Ford Coppola",
        rating: 9.2,
        duracion: "2h 55min",
        sinopsis:
            "El patriarca de una dinastia del crimen organizado transfiere el control de su imperio clandestino a su hijo menor, quien al principio es reacio.",
        imagen: "https://picsum.photos/seed/godfather/400/250",
        reparto: ["Marlon Brando", "Al Pacino", "James Caan"],
    },
    {
        id: 6,
        titulo: "Coco",
        anio: 2017,
        genero: "Animacion",
        director: "Lee Unkrich",
        rating: 8.4,
        duracion: "1h 45min",
        sinopsis:
            "Un nino aspirante a musico entra al Mundo de los Muertos para encontrar a su tatarabuelo, un legendario cantante, y demostrar su talento.",
        imagen: "https://picsum.photos/seed/coco/400/250",
        reparto: ["Anthony Gonzalez", "Gael Garcia Bernal", "Benjamin Bratt"],
    },
    {
        id: 7,
        titulo: "Parasite",
        anio: 2019,
        genero: "Thriller",
        director: "Bong Joon-ho",
        rating: 8.5,
        duracion: "2h 12min",
        sinopsis:
            "Una familia pobre idea un plan para infiltrarse en una familia adinerada haciendose pasar por personas no relacionadas entre si. Todo cambia de forma inesperada.",
        imagen: "https://picsum.photos/seed/parasite/400/250",
        reparto: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
    },
    {
        id: 8,
        titulo: "Whiplash",
        anio: 2014,
        genero: "Drama",
        director: "Damien Chazelle",
        rating: 8.5,
        duracion: "1h 46min",
        sinopsis:
            "Un joven baterista de jazz se inscribe en un exigente conservatorio donde un instructor abusivo lo empuja mas alla de sus limites.",
        imagen: "https://picsum.photos/seed/whiplash/400/250",
        reparto: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
    },
];

const header = document.querySelector("header");
const peliculasContainer = document.querySelector("#peliculas-container");
const detalleContainer = document.querySelector("#detalle-container");
const vistaHome = document.querySelector("#vista-home");
const vistaDetalle = document.querySelector("#vista-detalle");
const btnVolver = document.querySelector("#btn-volver");
const linkHome = document.querySelector("#link-home");

function renderCards() {
    let html = "";

    // function sumar(a, b) {
    //     return a + b;
    // }

    // const sumar = (a, b) => {
    //     return a + b;
    // };

    peliculas.forEach((pelicula) => {
        html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <article class="card card-pelicula h-100" data-id="${pelicula.id}">
                <img
                    src="${pelicula.imagen}"
                    class="card-img-top object-fit-cover"
                    alt="Poster de ${pelicula.titulo}"
                />

                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">
                        ${pelicula.titulo}
                    </h5>
                    <p class="card-text text-muted">
                        <small>${pelicula.anio} &middot; ${pelicula.genero}</small>
                    </p>
                    <div class="mt-auto">
                        <span class="badge bg-warning text-dark">
                            <i class="fa-solid fa-star"></i>${pelicula.rating}
                        </span>
                    </div>
                </div>
            </article>
        </div>`;
    });

    peliculasContainer.innerHTML = html;
}

function renderDetalle(id) {
    const pelicula = peliculas.find(function (p) {
        return p.id === id;
    });

    if (!pelicula) {
        detalleContainer.innerHTML = "<p>Pelicula no encontrada</p>";
        return;
    }

    let repartoHtml = "";

    pelicula.reparto.forEach((actor) => {
        repartoHtml += `
        <li class="list-group-item">
            <i class="fa-solid fa-user"></i> ${actor}
        </li>
        `;
    });

    detalleContainer.innerHTML = `
        <div class="row">
            <div class="col-12 col-md-5 mb-4">
                <img
                    src="${pelicula.imagen}"
                    alt="Poster de ${pelicula.titulo}"
                    class="img-fluid rounded shadow w-100 object-fit-cover"
                />
            </div>

            <div class="col-12 col-md-7">
                <h2>
                    ${pelicula.titulo}
                </h2>

                <div class="mb-3">
                    <span class="badge bg-primary me-2">${pelicula.anio}</span>
                    <span class="badge bg-secondary me-2">${pelicula.genero}</span>
                    <span class="badge bg-info me-2">${pelicula.duracion}</span>
                    <span class="badge bg-warning me-2 text-dark">
                        <i class="fa-solid fa-star me-1 "></i>${pelicula.rating}
                    </span>
                </div>

                <p>
                    <strong>
                        <i class="fa-solid fa-clapperboard me-2"></i>
                        Director:</strong> ${pelicula.director}
                    
                </p>

                <p>
                    <strong>
                        <i class="fa-solid fa-book-open me-2"></i>
                        Sinopsis:</strong> ${pelicula.sinopsis}
                    
                </p>

                <h5 class="mt-4">
                    <i class="fa-solid fa-users"></i>
                    Reparto Principal
                </h5>

                <ul class="list-group list-group-flush">
                    ${repartoHtml}
                </ul>
            </div>
        </div>
    `;
}

function mostrarHome() {
    // Quitamos las clases d-none
    vistaHome.classList.remove("d-none");
    header.classList.remove("d-none");

    vistaDetalle.classList.add("d-none");

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function mostrarDetalle(id) {
    renderDetalle(id);

    vistaHome.classList.add("d-none");
    header.classList.add("d-none");

    vistaDetalle.classList.remove("d-none");

    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

btnVolver.addEventListener("click", () => {
    mostrarHome();
});

linkHome.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarHome();
});

peliculasContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card-pelicula");

    if (!card) {
        return;
    }

    const idPelicula = Number(card.dataset.id);

    mostrarDetalle(idPelicula);
});

renderCards();
