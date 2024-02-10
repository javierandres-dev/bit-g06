import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  constructor() {}
  router = inject(Router);
  httpClient = inject(HttpClient);
  API_URL: string = 'http://localhost:4100/sesion';

  iniciarSesion(credenciales: Sesion) {
    return this.httpClient.post(this.API_URL, credenciales);
  }

  validarToken(token: string) {
    return this.httpClient.get(`${this.API_URL}/${token}`);
  }

  estaLogueado() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
