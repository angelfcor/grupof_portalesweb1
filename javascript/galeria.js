// galería de fotos con filtro por categoría
document.addEventListener("DOMContentLoaded", () => {

    renderGaleria("todas");

    // botones de filtro
    const botones = document.querySelectorAll(".filtro-btn");
    botones.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            // marcar activo
            botones.forEach(b => b.classList.remove("activo"));
            btn.classList.add("activo");

            const categoria = btn.getAttribute("data-filtro");
            renderGaleria(categoria);
        });
    });

});

// datos de la galería
const galeriaData = [
    // área social
    { src: "img/Area Social/area_social_1.jpg", alt: "Área social - vista 1", categoria: "area-social" },
    { src: "img/Area Social/area_social_2.jpg", alt: "Área social - vista 2", categoria: "area-social" },
    { src: "img/Area Social/area_social_3.jpg", alt: "Área social - piscina", categoria: "area-social" },
    { src: "img/Area Social/area_social_4.jpg", alt: "Área social - terraza", categoria: "area-social" },
    { src: "img/Area Social/area_social_5.jpg", alt: "Área social - jardín", categoria: "area-social" },
    { src: "img/Area Social/area_social_6.jpg", alt: "Área social - ambiente 1", categoria: "area-social" },
    { src: "img/Area Social/area_social_7.jpg", alt: "Área social - ambiente 2", categoria: "area-social" },
    { src: "img/Area Social/area_social_8.jpg", alt: "Área social - ambiente 3", categoria: "area-social" },
    // cabañas
    { src: "img/Cabaña Catalejo/cabana_catalejo_1.jpg", alt: "Cabaña Catalejo - exterior", categoria: "cabanas" },
    { src: "img/Cabaña Catalejo/cabana_catalejo_2.jpg", alt: "Cabaña Catalejo - interior", categoria: "cabanas" },
    { src: "img/Cabaña Catalejo/cabana_catalejo_3.jpg", alt: "Cabaña Catalejo - dormitorio", categoria: "cabanas" },
    { src: "img/Cabaña Estribor/cabana_estribor_1.jpg", alt: "Cabaña Estribor - exterior", categoria: "cabanas" },
    { src: "img/Cabaña Estribor/cabana_estribor_2.jpg", alt: "Cabaña Estribor - interior", categoria: "cabanas" },
    { src: "img/Cabaña Estribor/cabana_estribor_3.jpg", alt: "Cabaña Estribor - baño", categoria: "cabanas" },
    { src: "img/Cabaña Familiar La Perla/cabana_familiar_la_perla_1.jpg", alt: "Cabaña Familiar La Perla - sala", categoria: "cabanas" },
    { src: "img/Cabaña Timonel/cabana_timonel_1.jpg", alt: "Cabaña Timonel - exterior", categoria: "cabanas" },
    // habitaciones
    { src: "img/Habitación Almeja/habitacion_almeja_1.jpg", alt: "Habitación Almeja - vista 1", categoria: "habitaciones" },
    { src: "img/Habitación Almeja/habitacion_almeja_2.jpg", alt: "Habitación Almeja - vista 2", categoria: "habitaciones" },
    { src: "img/Habitación Almeja/habitacion_almeja_3.jpg", alt: "Habitación Almeja - vista 3", categoria: "habitaciones" },
    { src: "img/Habitación Almeja/habitacion_almeja_4.jpg", alt: "Habitación Almeja - baño", categoria: "habitaciones" },
    { src: "img/Habitación Almeja/habitacion_almeja_5.jpg", alt: "Habitación Almeja - detalle", categoria: "habitaciones" }
];

// renderizar galería
function renderGaleria(categoriaFiltro) {
    const grid = document.getElementById("galeria-grid");
    if (!grid) return;

    // limpiar rejilla
    grid.innerHTML = "";

    // filtrar imágenes
    const imagenesFiltradas = categoriaFiltro === "todas"
        ? galeriaData
        : galeriaData.filter(img => img.categoria === categoriaFiltro);

    imagenesFiltradas.forEach(item => {
        const figura = document.createElement("FIGURE");
        figura.classList.add("galeria-item");

        const img = document.createElement("IMG");
        img.src = item.src;
        img.alt = item.alt;

        const caption = document.createElement("FIGCAPTION");
        caption.textContent = item.alt.split(" - ")[0].trim();

        figura.appendChild(img);
        figura.appendChild(caption);
        grid.appendChild(figura);
    });
}

