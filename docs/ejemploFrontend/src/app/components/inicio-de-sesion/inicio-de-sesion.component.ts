import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrl: './inicio-de-sesion.component.css',
})
export class InicioDeSesionComponent {
  formularioCredenciales = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  });
  manejarEnvio() {
    if (this.formularioCredenciales.valid) {
      console.log(this.formularioCredenciales.value.nombreUsuario);
      console.log(this.formularioCredenciales.value.contrasenia);
    }
  }
}
