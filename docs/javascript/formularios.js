'use strict';
const $form1 = document.getElementById('form1');
const $resultado = document.getElementById('resultado');

$form1.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const datosFormulario = {
    nombre: $form1.nombre.value,
    apellido: $form1.apellido.value,
    fechaNacimiento: $form1.fechaNacimiento.value,
  };
  //console.log(datosFormulario);
  mostrarDatos(datosFormulario);
});

function mostrarDatos(datos) {
  //console.log(datos);
  const fechaNacimiento = new Date(datos.fechaNacimiento);
  //console.log(fechaNacimiento);
  const msFechaNacimiento = fechaNacimiento.getTime();
  //console.log(msFechaNacimiento);
  const msDiferencia = Date.now() - msFechaNacimiento;
  //console.log(msDiferencia);
  const fechaResultado = new Date(msDiferencia);
  //console.log(fechaResultado);
  const anios = fechaResultado.getUTCFullYear() - 1970;
  //console.log(anios);
  $resultado.textContent = `${datos.nombre} ${datos.apellido} tiene ${anios} años de edad.`;
}
