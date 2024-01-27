import { Component, inject } from '@angular/core';
import { RegalosService } from '../../services/regalos.service';

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [],
  templateUrl: './regalos.component.html',
  styleUrl: './regalos.component.css',
})
export class RegalosComponent {
  regalosService = inject(RegalosService);

  obtenerTodosLosRegalos() {
    this.regalosService.leerTodosLosRegalos().subscribe((respuesta: any) => {
      console.log(respuesta);
    });
  }

  ngOnInit() {
    this.obtenerTodosLosRegalos();
  }
}
