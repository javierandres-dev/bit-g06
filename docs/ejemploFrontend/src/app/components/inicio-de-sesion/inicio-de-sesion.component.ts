import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { SesionService } from '../../services/sesion.service';
import { Sesion } from '../../interfaces/sesion';

const jwtHelperService = new JwtHelperService();

@Component({
  selector: 'app-inicio-de-sesion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './inicio-de-sesion.component.html',
  styleUrl: './inicio-de-sesion.component.css',
})
export class InicioDeSesionComponent {
  router = inject(Router);
  toastrService = inject(ToastrService);
  sesionService: SesionService = inject(SesionService);
  formularioCredenciales = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  });
  manejarEnvio() {
    if (this.formularioCredenciales.valid) {
      const nombreUsuario = this.formularioCredenciales.value.nombreUsuario;
      const contrasenia = this.formularioCredenciales.value.contrasenia;

      if (
        typeof nombreUsuario === 'string' &&
        typeof contrasenia === 'string'
      ) {
        const credenciales: Sesion = {
          nombreUsuario,
          contrasenia,
        };
        this.sesionService
          .iniciarSesion(credenciales)
          .subscribe((respuesta: any) => {
            if (respuesta.resultado === 'bien') {
              const decodificado = jwtHelperService.decodeToken(
                respuesta.datos.token
              );
              localStorage.setItem('token', respuesta.datos.token);
              //localStorage.setItem('data', JSON.stringify(decodificado));
              this.toastrService.success(
                respuesta.mensaje + ' ' + decodificado.nombre
              );
              this.router.navigateByUrl('/regalos');
            } else {
              this.toastrService.error(respuesta.mensaje);
            }
          });
      }
    }
  }
}
