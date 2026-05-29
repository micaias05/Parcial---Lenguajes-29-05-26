const nombre_apellido = document.getElementById('nombre_apellido');
const dni = document.getElementById('dni');
const fechnac = document.getElementById('fechnac');
const btnEnviar = document.getElementById('btnEnviar');

const errorNombre = document.getElementById('error_nombre');
const errorDni = document.getElementById('error_dni');
const errorFechnac = document.getElementById('error_fechnac');
const formularioValido = document.getElementById('formulario_valido');

const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

btnEnviar.addEventListener('click', function(e) {
    e.preventDefault();

    let inputNombre = nombre_apellido.value;
    let inputDni = dni.value;
    let inputFechnac = fechnac.value;

    errorNombre.innerHTML = '';
    errorDni.innerHTML = '';
    errorFechnac.innerHTML = '';
    formularioValido.innerHTML = '';


    let esValido = true;

    if (!validarNombre(inputNombre)){
        errorNombre.innerHTML = 'Error, ingreso invalido (mínimo 3 digitos, solo letras).';
        esValido = false;
    }

    if (!validarDni(inputDni)){
        errorDni.innerHTML = 'Error, ingreso invalido (8 digitos, solo números).';
        esValido = false;
    }

    if (!validarFechnac(inputFechnac)){
        errorFechnac.innerHTML = 'Error, ingreso invalido (Debe ser mayoy de 18 años).';
        esValido = false;
    }

    if(esValido){
        formularioValido.innerHTML = 'Formulario completado con exito!';
    }
});

const validarNombre = (nombre) => {
    if(regexLetras.test(nombre) && nombre.length >= 3){
        return true;
    } else {
        return false;
    }
}

const validarDni = (dni) => {
    if(!isNaN(dni) && dni.length == 8){
        return true;
    } else {
        return false;
    }
}

const validarFechnac = (fec) => {
    let band = true;
    
    if (fec === ''){
        return false;
    }
    
    let fechaNacimiento = new Date(fec);
    let hoy = new Date();

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

    if (edad < 18){
        band = false;
    }

    if (band){
        return true;
    } else {
        return false;
    }
}

const btnPreguntas = document.getElementById('btnPreguntas');
const resultadosPreguntas = document.getElementById('resultados_preguntas');

btnPreguntas.addEventListener('click', function(e){ 
    e.preventDefault();

    let rtaNacionalidad = prompt('¿Cuál es tu nacionalidad?');
    let rtaProgramacion = prompt('¿Cuál es tu nivel de conocimiento en programación? (Básico / Intermedio / Avanzado)');
    let rtaCarrera = prompt('¿Por qué elegiste esta carrera?');

    if (rtaNacionalidad === null || rtaNacionalidad === ''){
        rtaNacionalidad = 'No respondió esta pregunta.';
    }

    if (rtaProgramacion === null || rtaProgramacion === ''){
        rtaProgramacion = 'No respondió esta pregunta.';
    }
    
    if(rtaCarrera === null || rtaCarrera === ''){
        rtaCarrera = 'No respondió esta pregunta.';
    }

    resultadosPreguntas.innerHTML = `
        <strong>Nacionalidad:</strong> <div>${rtaNacionalidad}</div>
        <strong>Nivel de Programación:</strong> <div>${rtaProgramacion}</div>
        <strong>Porque eligió la carrera:</strong> <div>${rtaCarrera}</div>
    `;
});

