import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Regalo } from '../interfaces/regalo';

@Injectable({
  providedIn: 'root',
})
export class RegalosService {
  constructor() {}

  API_URL = 'http://localhost:4100/regalos';
  httpClient = inject(HttpClient);

  crear(regalo: Regalo) {
    return this.httpClient.post(this.API_URL, regalo);
  }

  leerTodos() {
    return this.httpClient.get(this.API_URL);
  }

  leer(id: string) {
    return this.httpClient.get(this.API_URL + '/' + id);
  }

  actualizar(id: string, regalo: Regalo) {
    return this.httpClient.put(`${this.API_URL}/${id}`, regalo);
  }

  eliminar(id: string) {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }
}
