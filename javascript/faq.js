document.addEventListener("DOMContentLoaded", () => {

    const preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach(pregunta => {
        pregunta.addEventListener("click", (e) => {
            e.preventDefault();

            const item = pregunta.parentElement;
            const respuesta = item.querySelector(".faq-respuesta");
            const estaAbierto = !respuesta.classList.contains("hidden");

            document.querySelectorAll(".faq-respuesta").forEach(r => {
                r.classList.add("hidden");
            });
            document.querySelectorAll(".faq-pregunta").forEach(p => {
                p.classList.remove("abierto");
            });

            if (!estaAbierto) {
                respuesta.classList.remove("hidden");
                pregunta.classList.add("abierto");
            }
        });
    });

    const primera = document.querySelector(".faq-pregunta");
    if (primera) {
        const primeraRespuesta = primera.parentElement.querySelector(".faq-respuesta");
        if (primeraRespuesta) {
            primeraRespuesta.classList.remove("hidden");
            primera.classList.add("abierto");
        }
    }

});
