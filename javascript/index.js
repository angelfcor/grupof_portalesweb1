// inicio: carrusel y tarjetas de cabañas
document.addEventListener("DOMContentLoaded", () => {

    // carrusel principal
    const carrusel = new Carousel("carruselPrincipal", 4);
    carrusel.init();

    // tarjetas de cabañas
    renderCabinas();

});

// clase carrusel
class Carousel {
    constructor(carouselId, tickTimeInSeconds = 4) {
        this.carouselHolder = document.getElementById(carouselId);
        this.track = this.carouselHolder.querySelector(".track");
        this.slides = [...this.track.querySelectorAll(".slide")];
        this.minLimit = 0;
        this.maxLimit = this.slides.length - 1;
        this.currentIndex = 0;
        this.tickTime = tickTimeInSeconds * 1000;
        this.tickerId = null;
        this.direction = 1;
    }

    init() {
        this.generateNavigationUI();
        this.tick();
    }

    tick() {
        this.tickerId = setTimeout(() => {
            this.moveNext();
            this.tick();
        }, this.tickTime);
    }

    moveNext() {
        let tmpNewIndex = this.currentIndex + this.direction;

        if (tmpNewIndex > this.maxLimit) {
            tmpNewIndex = this.maxLimit - 1;
            this.direction = -1;
        }
        if (tmpNewIndex < this.minLimit) {
            tmpNewIndex = this.minLimit + 1;
            this.direction = 1;
        }

        this.moveTo(tmpNewIndex);
    }

    moveTo(newIndex) {
        this.currentIndex = newIndex;
        this.track.style.left = `${-100 * this.currentIndex}vw`;
    }

    generateNavigationUI() {
        const btnLeft  = document.createElement("BUTTON");
        const btnRight = document.createElement("BUTTON");

        btnLeft.classList.add("carousel-btn", "btnleft");
        btnRight.classList.add("carousel-btn", "btnright");

        btnLeft.textContent  = "<";
        btnRight.textContent = ">";

        btnLeft.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let newIndex = this.currentIndex - 1;
            if (newIndex < this.minLimit) {
                newIndex = this.maxLimit;
                this.direction = -1;
            }
            this.moveTo(newIndex);
        });

        btnRight.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let newIndex = this.currentIndex + 1;
            if (newIndex > this.maxLimit) {
                newIndex = this.minLimit;
                this.direction = 1;
            }
            this.moveTo(newIndex);
        });

        this.carouselHolder.appendChild(btnLeft);
        this.carouselHolder.appendChild(btnRight);
    }
}

// datos de cabañas
const cabinasData = [
    {
        nombre: "Cabaña Catalejo",
        tipo: "Cabaña",
        folder: "Cabaña Catalejo",
        portada: "cabana_catalejo_1.jpg",
        descripcion: "Disfruta de esta acogedora cabaña con vista al entorno natural de la isla.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20catalejo"
    },
    {
        nombre: "Cabaña Estribor",
        tipo: "Cabaña",
        folder: "Cabaña Estribor",
        portada: "cabana_estribor_1.jpg",
        descripcion: "Espacio confortable con todas las amenidades para tu descanso ideal.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20estribor"
    },
    {
        nombre: "Cabaña Familiar La Perla",
        tipo: "Cabaña familiar",
        folder: "Cabaña Familiar La Perla",
        portada: "cabana_familiar_la_perla_1.jpg",
        descripcion: "Ideal para familias, con amplio espacio y todas las comodidades necesarias.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20familiar%20la%20perla"
    },
    {
        nombre: "Cabaña Timonel",
        tipo: "Cabaña",
        folder: "Cabaña Timonel",
        portada: "cabana_timonel_1.jpg",
        descripcion: "Relájate en este hermoso espacio con vistas naturales únicas del golfo.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20timonel"
    },
    {
        nombre: "Habitación Almeja",
        tipo: "Habitación",
        folder: "Habitación Almeja",
        portada: "habitacion_almeja_1.jpg",
        descripcion: "Habitación acogedora con todo lo necesario para una estadía cómoda.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20habitacion%20almeja"
    },
    {
        nombre: "Cabaña La Fragata",
        tipo: "Próximamente",
        folder: null,
        portada: null,
        descripcion: "Espacio reservado. Esta cabaña aún no tiene fotografías disponibles.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20fragata"
    },
    {
        nombre: "Cabaña La Navío",
        tipo: "Próximamente",
        folder: null,
        portada: null,
        descripcion: "Espacio reservado. Esta cabaña aún no tiene fotografías disponibles.",
        enlace: "https://wa.me/50432849397?text=Hola%20necesito%20informacion%20sobre%20la%20caba%C3%B1a%20nav%C3%ADo"
    }
];

// renderizar tarjetas de cabañas
function renderCabinas() {
    const grid = document.getElementById("cabanas-grid");
    if (!grid) return;

    cabinasData.forEach(cabina => {

        const card = document.createElement("ARTICLE");
        card.classList.add("cabin-card");

        // imagen o marcador
        if (cabina.folder && cabina.portada) {
            const img = document.createElement("IMG");
            img.src = buildImagePath(cabina.folder, cabina.portada);
            img.alt = cabina.nombre + " - imagen principal";
            card.appendChild(img);
        } else {
            const placeholder = document.createElement("DIV");
            placeholder.classList.add("no-image");
            placeholder.textContent = "Imagen disponible próximamente";
            card.appendChild(placeholder);
        }

        // cuerpo
        const body = document.createElement("DIV");
        body.classList.add("card-body");

        const tag = document.createElement("P");
        tag.classList.add("card-tag");
        tag.textContent = cabina.tipo;

        const titulo = document.createElement("H3");
        titulo.textContent = cabina.nombre;

        const desc = document.createElement("P");
        desc.textContent = cabina.descripcion;

        const enlace = document.createElement("A");
        enlace.href = cabina.enlace;
        enlace.target = "_blank";
        enlace.textContent = "Solicitar información";
        enlace.classList.add("btn", "btn-primary");

        body.appendChild(tag);
        body.appendChild(titulo);
        body.appendChild(desc);
        body.appendChild(enlace);
        card.appendChild(body);
        grid.appendChild(card);
    });
}

function buildImagePath(carpeta, archivo) {
    return "img/" + carpeta + "/" + archivo;
}
