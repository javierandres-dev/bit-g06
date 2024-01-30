import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regalo } from '../interfaces/regalos';

@Injectable({
  providedIn: 'root',
})
export class RegalosService {
  constructor() {}

  API_URL: string = 'http://localhost:4100/regalos';

  httpClient = inject(HttpClient);

  crearRegalo(regalo: Regalo) {
    return this.httpClient.post(this.API_URL, regalo);
  }

  leerTodosLosRegalos() {
    return this.httpClient.get(this.API_URL);
  }
}
