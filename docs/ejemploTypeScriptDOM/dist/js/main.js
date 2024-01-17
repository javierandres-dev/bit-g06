"use strict";
const $form = document.querySelector('form');
$form.addEventListener('submit', agregarEmpleado);
$form.nacimiento.addEventListener('input', (evento) => {
    var _a;
    const edadCalculada = obtenerEdad((_a = evento === null || evento === void 0 ? void 0 : evento.target) === null || _a === void 0 ? void 0 : _a.value);
    $form.edad.value =
        edadCalculada === 1 ? `${edadCalculada} año` : `${edadCalculada} años`;
});
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
        vivienda: $form.vivienda.checked,
        vehiculo: $form.vehiculo.checked,
        climaPreferido: $form.clima.value,
        horaAlmuerzo: $form.almuerzo.value,
        colorFavorito: $form.color.value || '#ffffff',
        pasatiempos: $form.pasatiempos.value.split(','),
        salario: $form.salario.value,
    };
    empleados.push(empleado);
    $form.reset();
    mostrarEmpleados();
}
function obtenerEdad(fecha) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha);
    const diferenciaAnios = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const esAntesDelNacimiento = hoy.getMonth() < fechaNacimiento.getMonth() ||
        (hoy.getMonth() === fechaNacimiento.getMonth() &&
            hoy.getDate() < fechaNacimiento.getDate());
    return esAntesDelNacimiento ? diferenciaAnios - 1 : diferenciaAnios;
}
function mostrarEmpleados() {
    const $tbody = document.querySelector('tbody');
    let contenidoHtml = '';
    empleados.forEach((empleado) => {
        const edadEmpleado = obtenerEdad(empleado.nacimiento);
        contenidoHtml += `
<tr>
  <td>${empleado.nombre} ${empleado.apellido}</td>
  <td>${edadEmpleado === 1 ? `${edadEmpleado} año` : `${edadEmpleado} años`}</td>
  <td>${empleado.genero}</td>
  <td>${empleado.estadoCivil}</td>
  <td>${empleado.cantidadHijos}</td>
  <td>${empleado.telefono}</td>
  <td>${empleado.correo}</td>
  <td>${empleado.web}</td>
  <td>${empleado.vivienda ? 'Si' : 'No'}</td>
  <td>${empleado.vehiculo ? 'Si' : 'No'}</td>
  <td>${empleado.climaPreferido === '0'
            ? 'Frio'
            : empleado.climaPreferido === '2'
                ? 'Cálido'
                : 'Templado'}</td>
  <td>${empleado.horaAlmuerzo}</td>
  <td class="circulo" style="background-color: ${empleado.colorFavorito}"></td>
  <td>${empleado.pasatiempos}</td>
  <td>${empleado.salario}</td>
</tr>
    `;
    });
    $tbody.innerHTML = contenidoHtml;
}
