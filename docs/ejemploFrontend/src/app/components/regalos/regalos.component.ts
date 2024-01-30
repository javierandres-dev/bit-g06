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

  regaloId: string = '';

  manejarAccion() {
    console.log('manejar Accion...');
    if (this.modalBoton === 'Crear') {
      this.regalosService
        .crearRegalo(this.regalo)
        .subscribe((respuesta: any) => {
          console.log(respuesta);
          this.obtenerTodosLosRegalos();
        });
    } else if (this.modalBoton === 'Ver') {
    } else if (this.modalBoton === 'Editar') {
    } else if (this.modalBoton === 'Eliminar') {
    }
  }

  mostrarModalAgregar() {
    this.modalTitulo = 'Agregar';
    this.modalBoton = 'Crear';
  }

  mostrarModalVer(id: string) {
    console.log('mostrarModalVer...id:', id);
    this.regaloId = id;
    this.modalTitulo = 'Ver...';
    this.modalBoton = 'Ver';
  }

  mostrarModalEditar(id: string) {
    console.log('mostrarModalEditar...id:', id);
    this.regaloId = id;
    this.modalTitulo = 'Actualizar...';
    this.modalBoton = 'Actualizar';
  }

  mostrarModalEliminar(id: string) {
    console.log('mostrarModalEliminar...id:', id);
    this.regaloId = id;
    this.modalTitulo = 'Eliminar...';
    this.modalBoton = 'Eliminar';
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
