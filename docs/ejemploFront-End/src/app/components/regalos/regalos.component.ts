import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegalosService } from '../../services/regalos.service';
import { Regalo } from '../../interfaces/regalo';

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [],
  templateUrl: './regalos.component.html',
  styleUrl: './regalos.component.css',
})
export class RegalosComponent {
  toastrService = inject(ToastrService);
  regalosService = inject(RegalosService);

  ngOnInit() {
    this.manejarLeerTodos();
  }

  manejarLeerTodos() {
    this.regalosService.leerTodos().subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }

  manejarCrear() {
    const nuevoRegalo: Regalo = {
      destinatario: 'Pepito',
      nombre: 'iPod',
      entregado: false,
    };

    this.regalosService.crear(nuevoRegalo).subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }

  manejarLeer() {
    const id: string = '65bc4feda9837a46de4dc37e';

    this.regalosService.leer(id).subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }

  manejarActualizar() {
    const id: string = '65bc4feda9837a46de4dc37e';
    const actualizarRegalo: Regalo = {
      destinatario: 'Fulanito',
      nombre: 'iPod + estuche',
      entregado: true,
    };

    this.regalosService
      .actualizar(id, actualizarRegalo)
      .subscribe((respuesta: any) => {
        this.toastrService.show(respuesta.mensaje, respuesta.resultado);
        console.log(respuesta);
      });
  }

  manejarEliminar() {
    const id: string = '65bc27bba9837a46de4dc366';

    this.regalosService.eliminar(id).subscribe((respuesta: any) => {
      this.toastrService.show(respuesta.mensaje, respuesta.resultado);
      console.log(respuesta);
    });
  }
}
