import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  constructor() {}
  httpClient = inject(HttpClient);
  API_URL: string = 'http://localhost:4100/sesion';

  iniciarSesion(credenciales: Sesion) {
    return this.httpClient.post(this.API_URL, credenciales);
  }
}
