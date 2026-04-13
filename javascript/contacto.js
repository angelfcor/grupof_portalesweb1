const regexIsEmpty = /^\s*$/;
const regexIsEmail = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
const regexIsPhone = /^\+?[\d\s\-]{7,15}$/;

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("contactForm");
    if (!formulario) return;
    const btnEnviar = document.getElementById("btnEnviar");
    if (!btnEnviar) return;

    btnEnviar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        limpiarErrores(formulario);

        const nombreInput = document.getElementById("txtNombre");
        const correoInput = document.getElementById("txtCorreo");
        const telefonoInput = document.getElementById("txtTelefono");
        const asuntoInput = document.getElementById("txtAsunto");
        const mensajeInput = document.getElementById("txtMensaje");

        const errores = {};
        let formularioValido = true;
        if (!validarNoVacio(nombreInput.value)) {
            errores["txtNombreDiv"] = {
                mensaje: "El nombre completo no puede estar vacío.",
                input: nombreInput
            };
            formularioValido = false;
        }
        if (!validarCorreo(correoInput.value)) {
            errores["txtCorreoDiv"] = {
                mensaje: "El correo electrónico no tiene un formato correcto.",
                input: correoInput
            };
            formularioValido = false;
        }
        if (!validarTelefono(telefonoInput.value)) {
            errores["txtTelefonoDiv"] = {
                mensaje: "El teléfono no tiene un formato válido.",
                input: telefonoInput
            };
            formularioValido = false;
        }
        if (asuntoInput && !validarNoVacio(asuntoInput.value)) {
            errores["txtAsuntoDiv"] = {
                mensaje: "El asunto no puede estar vacío.",
                input: asuntoInput
            };
            formularioValido = false;
        }
        if (!validarNoVacio(mensajeInput.value)) {
            errores["txtMensajeDiv"] = {
                mensaje: "El mensaje no puede estar vacío.",
                input: mensajeInput
            };
            formularioValido = false;
        }
        if (formularioValido) {
            formulario.submit();
        } else {
            Object.entries(errores).forEach(([key, obj]) => {
                obj.input.classList.add("error");
                const contenedor = document.getElementById(key);
                if (contenedor) {
                    const errorDiv = document.createElement("DIV");
                    errorDiv.classList.add("error-text");
                    errorDiv.textContent = obj.mensaje;
                    contenedor.appendChild(errorDiv);
                }
            });
        }
    });
});

function limpiarErrores(formulario) {
    formulario.querySelectorAll(".error-text").forEach(el => el.remove());
    formulario.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
}
function validarNoVacio(valor) {
    return !regexIsEmpty.test(valor);
}
function validarCorreo(valor) {
    return regexIsEmail.test(valor);
}
function validarTelefono(valor) {
    return regexIsEmpty.test(valor) || regexIsPhone.test(valor);
}