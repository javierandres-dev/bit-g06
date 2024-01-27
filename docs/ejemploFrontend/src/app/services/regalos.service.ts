import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegalosService {
  constructor() {}

  API_URL: string = 'http://localhost:4100/regalos';

  httpClient = inject(HttpClient);

  leerTodosLosRegalos() {
    return this.httpClient.get(this.API_URL);
  }
}
