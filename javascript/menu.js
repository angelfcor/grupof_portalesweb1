// menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {

    // alternar menú
    const hb = document.getElementById("menu-toggle");
    const nv = document.getElementById("site-nav");

    if (hb && nv) {
        hb.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            nv.classList.toggle("hidden");
        });

        // cerrar al hacer clic en un enlace
        nv.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => nv.classList.add("hidden"));
        });
    }

    // marcar enlace activo
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";
    if (nv) {
        nv.querySelectorAll("a").forEach(a => {
            if (a.getAttribute("href") === paginaActual) {
                a.classList.add("active");
            }
        });
    }

});
