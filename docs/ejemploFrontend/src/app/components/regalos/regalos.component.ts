import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegalosService } from '../../services/regalos.service';
import { Regalo } from '../../interfaces/regalos';

@Component({
  selector: 'app-regalos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './regalos.component.html',
  styleUrl: './regalos.component.css',
})
export class RegalosComponent {
  regalosService = inject(RegalosService);

  regaloInicial: Regalo = {
    destinatario: '',
    nombre: '',
    entregado: false,
  };
  regalo: Regalo = this.regaloInicial;

  todosLosRegalos: any[] = [];

  modalTitulo: string = '';
  modalBoton: string = '';
  modalColorBoton: string = '';

  regaloId: string = '';

  restablecerPropiedades() {
    this.modalTitulo = '';
    this.modalBoton = '';
    this.modalColorBoton = '';
    this.regaloId = '';
    this.regalo = this.regaloInicial;
  }

  manejarAccion() {
    if (this.modalBoton === 'Crear') {
      this.regalosService
        .crearRegalo(this.regalo)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.restablecerPropiedades();
          this.obtenerTodosLosRegalos();
        });
    } else if (this.modalBoton === 'Actualizar') {
      this.regalosService
        .actualizarRegalo(this.regaloId, this.regalo)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.restablecerPropiedades();
          this.obtenerTodosLosRegalos();
        });
    } else if (this.modalBoton === 'Eliminar') {
      this.regalosService
        .eliminarRegalo(this.regaloId)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.restablecerPropiedades();
          this.obtenerTodosLosRegalos();
        });
    }
  }

  mostrarModalAgregar() {
    this.modalTitulo = 'Agregar';
    this.modalBoton = 'Crear';
    this.modalColorBoton = 'primary';
  }

  mostrarModalVer(id: string) {
    this.modalTitulo = 'Detalles';
    this.modalBoton = 'Ver';
    this.modalColorBoton = 'outline-light';
    this.regalosService.leerRegalo(id).subscribe((respuesta: any) => {
      this.regalo = respuesta.datos;
    });
  }

  mostrarModalEditar(id: string) {
    this.regaloId = id;
    this.modalTitulo = 'Actualizar datos';
    this.modalBoton = 'Actualizar';
    this.modalColorBoton = 'warning';
    this.regalosService.leerRegalo(id).subscribe((respuesta: any) => {
      this.regalo = respuesta.datos;
    });
  }

  mostrarModalEliminar(id: string) {
    this.regaloId = id;
    this.modalTitulo = '¿Eliminar registro?';
    this.modalBoton = 'Eliminar';
    this.modalColorBoton = 'danger';
  }

  obtenerTodosLosRegalos() {
    this.regalosService.leerTodosLosRegalos().subscribe((respuesta: any) => {
      this.todosLosRegalos = respuesta.datos;
    });
  }

  ngOnInit() {
    this.obtenerTodosLosRegalos();
  }
}
