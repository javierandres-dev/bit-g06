"use strict";
const $form = document.querySelector('form');
$form.addEventListener('submit', agregarEmpleado);
const empleados = [];
function agregarEmpleado(evento) {
    evento.preventDefault();
    const empleado = {
        id: `emp${empleados.length + 1}`,
        nombre: $form.nombre.value,
        apellido: $form.apellido.value,
        nacimiento: $form.nacimiento.value,
        genero: $form.genero.value,
        estadoCivil: $form.estadoCivil.value,
        cantidadHijos: $form.hijos.value,
        telefono: $form.telefono.value,
        correo: $form.correo.value,
        web: $form.web.value,
        vivienda: $form.checked,
        vehiculo: $form.checked,
        climaPreferido: $form.clima.value,
        horaAlmuerzo: $form.almuerzo.value,
        colorFavorito: $form.color.value,
        pasatiempos: $form.pasatiempos.value.split(','),
        salario: $form.salario.value,
    };
    console.log(empleado);
}
