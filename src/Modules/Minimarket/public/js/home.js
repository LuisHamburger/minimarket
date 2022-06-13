

/* INICIO SELECTOR CATEGORIA */
// Función encargada del selector categoria, se establece el maximo de selecciones permitidas y el placeholder
$(document).ready(function () {
    $('.js-multiple-select').select2({
        maximumSelectionLength: 1,
        placeholder: "Seleccione una categoría"
    });
});

/* FIN SELECTOR CATEGORIA */

/* INICIO ESTADO CLIENTE */
const btnGuardar = document.getElementById("btnGuardar");
const nombreInput = document.getElementById("nombreApellido");
const celularInput = document.getElementById("celular");
const rucInput = document.getElementById("ruc");
const correoInput = document.getElementById("correo");

const validarInputNombre = () => {
    const nombre = nombreInput.value;
    const errorNombre = document.getElementById("error-input-nombre");
    if (nombre.trim().length < 4) {
        errorNombre.classList.remove("d-none")
        btnGuardar.setAttribute("disabled", "");
        return false;
    } else {
        errorNombre.classList.add("d-none")
        return true;
    }
}

const validarInputCelular = () => {
    const celular = celularInput.value;
    const errorCelular = document.getElementById("error-input-celular");
    if (celular.trim().length < 9) {
        errorCelular.classList.remove("d-none")
        btnGuardar.setAttribute("disabled", "");
        return false;
    } else {
        errorCelular.classList.add("d-none")
        return true;
    }
}

const validarInputRuc = () => {
    const ruc = rucInput.value;
    const errorRuc = document.getElementById("error-input-ruc");

    if (ruc.trim().length > 0 && ruc.trim().length < 11) {
        errorRuc.classList.remove("d-none")
        btnGuardar.setAttribute("disabled", "");
        return false;
    } else {
        errorRuc.classList.add("d-none");
        return true;
    }
}

const validarInputCorreo = () => {
    const correo = correoInput.value;
    const errorCorreo = document.getElementById("error-input-correo");
    const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (correo.trim().length > 0 && !expr.test(correo)) {
        errorCorreo.classList.remove("d-none")
        btnGuardar.setAttribute("disabled", "");
        return false;
    } else {
        errorCorreo.classList.add("d-none")
        return true;
    }
}

const validarInputs = () => {
    if (validarInputNombre() && validarInputCelular() && validarInputCorreo() && validarInputRuc()) {
        btnGuardar.removeAttribute("disabled");
        return true;
    }
    return false;
}

const validacionEstadoCliente = () => {
    const customerStatus = JSON.parse(localStorage.getItem("cliente"));
    document.getElementById("container-status-error").classList.add("d-none")
    document.getElementById("container-status-success").classList.add("d-none")
    nombreInput.value = "";
    celularInput.value = "";
    correoInput.value = "";
    rucInput.value = "";
    if (customerStatus) {
        document.getElementById("container-status-success").classList.remove("d-none")
        nombreInput.value = customerStatus.nombre;
        celularInput.value = customerStatus.celular;
        correoInput.value = customerStatus.correo;
        rucInput.value = customerStatus.ruc;
        validarInputs()
    } else {
        document.getElementById("container-status-error").classList.remove("d-none")
    }
}

const guardarEstadoCliente = () => {

    if (validarInputs()) {
        const nombre = nombreInput.value;
        const celular = celularInput.value;
        const correo = correoInput.value;
        const ruc = rucInput.value;

        const guardarInformacionLocal = () => {
            localStorage.setItem("cliente", JSON.stringify({
                nombre,
                celular,
                correo,
                ruc
            }))
        }


        guardarInformacionLocal();
        validacionEstadoCliente();
    }
}


btnGuardar.addEventListener("click", guardarEstadoCliente, false);
nombreInput.addEventListener("input", validarInputNombre, false);
celularInput.addEventListener("input", validarInputCelular, false);
correoInput.addEventListener("input", validarInputCorreo, false);
rucInput.addEventListener("input", validarInputRuc, false);
nombreInput.addEventListener("keyup", validarInputs, false);
celularInput.addEventListener("keyup", validarInputs, false);
correoInput.addEventListener("keyup", validarInputs, false);
rucInput.addEventListener("keyup", validarInputs, false);


validacionEstadoCliente();

/* FIN ESTADO CLIENTE */


/* INCIO ITEM PRODUCTO */


const btnAgregarElements = document.getElementsByClassName("agregar");

const agregar = () => {
    const cantidad = $(this).next(".cantidad");
    const cantidadInputs = $(this).next(".cantidadInputs");

    if (Number(cantidad.text()) == 0) {
        console.log(cantidad.text(), cantidadInputs)
        cantidad.val(1);
        cantidadInputs.removeClass("d-none")
    }
}

Array.from(btnAgregarElements).forEach((element) => {
    element.addEventListener('click', agregar, false);
});


/* FIN ITEM PRODUCTO */


