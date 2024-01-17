const $form = document.querySelector('form') as HTMLFormElement;

$form.addEventListener('submit', agregarEmpleado);
$form.nacimiento.addEventListener('input', (evento: Event) => {
  const edadCalculada = obtenerEdad(evento?.target?.value);
  $form.edad.value =
    edadCalculada === 1 ? `${edadCalculada} año` : `${edadCalculada} años`;
});

interface Empleado {
  id: string;
  nombre: string;
  apellido: string;
  nacimiento: Date;
  genero: string;
  estadoCivil: string;
  cantidadHijos: number;
  telefono: string;
  correo: string;
  web: string;
  vivienda: boolean;
  vehiculo: boolean;
  climaPreferido: string;
  horaAlmuerzo: Date;
  colorFavorito: string;
  pasatiempos: string[];
  salario: number;
}

const empleados: Empleado[] = [];

function agregarEmpleado(evento: Event): void {
  evento.preventDefault();
  const empleado: Empleado = {
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

function obtenerEdad(fecha: Date): number {
  const hoy = new Date();
  const fechaNacimiento = new Date(fecha);
  const diferenciaAnios = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const esAntesDelNacimiento =
    hoy.getMonth() < fechaNacimiento.getMonth() ||
    (hoy.getMonth() === fechaNacimiento.getMonth() &&
      hoy.getDate() < fechaNacimiento.getDate());
  return esAntesDelNacimiento ? diferenciaAnios - 1 : diferenciaAnios;
}

function mostrarEmpleados(): void {
  const $tbody = document.querySelector('tbody')!;
  let contenidoHtml: string = '';
  empleados.forEach((empleado) => {
    const edadEmpleado: number = obtenerEdad(empleado.nacimiento);
    contenidoHtml += `
<tr>
  <td>${empleado.nombre} ${empleado.apellido}</td>
  <td>${
    edadEmpleado === 1 ? `${edadEmpleado} año` : `${edadEmpleado} años`
  }</td>
  <td>${empleado.genero}</td>
  <td>${empleado.estadoCivil}</td>
  <td>${empleado.cantidadHijos}</td>
  <td>${empleado.telefono}</td>
  <td>${empleado.correo}</td>
  <td>${empleado.web}</td>
  <td>${empleado.vivienda ? 'Si' : 'No'}</td>
  <td>${empleado.vehiculo ? 'Si' : 'No'}</td>
  <td>${
    empleado.climaPreferido === '0'
      ? 'Frio'
      : empleado.climaPreferido === '2'
      ? 'Cálido'
      : 'Templado'
  }</td>
  <td>${empleado.horaAlmuerzo}</td>
  <td class="circulo" style="background-color: ${empleado.colorFavorito}"></td>
  <td>${empleado.pasatiempos}</td>
  <td>${empleado.salario}</td>
</tr>
    `;
  });
  $tbody.innerHTML = contenidoHtml;
}
