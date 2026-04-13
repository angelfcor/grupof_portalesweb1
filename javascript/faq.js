document.addEventListener("DOMContentLoaded", () => {

    const preguntas = document.querySelectorAll(".faq-pregunta");

    preguntas.forEach(pregunta => {
        pregunta.addEventListener("click", (e) => {
            e.preventDefault();

            const item = pregunta.parentElement;
            const respuesta = item.querySelector(".faq-respuesta");
            const estaAbierto = !respuesta.classList.contains("hidden");

            document.querySelectorAll(".faq-respuesta").forEach(r => {
                r.style.maxHeight = null;
                r.classList.add("hidden");
            });
            document.querySelectorAll(".faq-pregunta").forEach(p => {
                p.classList.remove("abierto");
            });

            if (!estaAbierto) {
                respuesta.style.transition = 'none';
                respuesta.classList.remove("hidden");
                const trueHeight = respuesta.scrollHeight;
                respuesta.classList.add("hidden");
                void respuesta.offsetHeight;
                respuesta.style.transition = '';

                respuesta.classList.remove("hidden");
                respuesta.style.maxHeight = trueHeight + "px";
                pregunta.classList.add("abierto");
            }
        });
    });

    const primera = document.querySelector(".faq-pregunta");
    if (primera) {
        const primeraRespuesta = primera.parentElement.querySelector(".faq-respuesta");
        if (primeraRespuesta) {
            primeraRespuesta.style.transition = 'none';
            primeraRespuesta.classList.remove("hidden");
            const trueHeight = primeraRespuesta.scrollHeight;
            primeraRespuesta.style.transition = '';

            primeraRespuesta.style.maxHeight = trueHeight + "px";
            primera.classList.add("abierto");
        }
    }

});
