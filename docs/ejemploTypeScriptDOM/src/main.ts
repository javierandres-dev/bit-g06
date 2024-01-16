const $form = document.querySelector('form') as HTMLFormElement;

$form.addEventListener('submit', agregarEmpleado);

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
