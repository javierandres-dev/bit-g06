import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SesionService } from '../../services/sesion.service';
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
  toastrService = inject(ToastrService);
  sesionService = inject(SesionService);
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

  nombreUsuario: string = '';

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
          if (respuesta.resultado === 'bien') {
            this.restablecerPropiedades();
            this.obtenerTodosLosRegalos();
            this.toastrService.success(respuesta.mensaje);
          } else {
            this.toastrService.error(respuesta.mensaje);
          }
        });
    } else if (this.modalBoton === 'Actualizar') {
      this.regalosService
        .actualizarRegalo(this.regaloId, this.regalo)
        .subscribe((respuesta: any) => {
          if (respuesta.resultado === 'bien') {
            this.restablecerPropiedades();
            this.obtenerTodosLosRegalos();
            this.toastrService.success(respuesta.mensaje);
          } else {
            this.toastrService.error(respuesta.mensaje);
          }
        });
    } else if (this.modalBoton === 'Eliminar') {
      this.regalosService
        .eliminarRegalo(this.regaloId)
        .subscribe((respuesta: any) => {
          if (respuesta.resultado === 'bien') {
            this.restablecerPropiedades();
            this.obtenerTodosLosRegalos();
            this.toastrService.warning(respuesta.mensaje);
          } else {
            this.toastrService.error(respuesta.mensaje);
          }
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
    this.modalBoton = `Ver`;
    this.modalColorBoton = 'outline-light';
    this.regalosService.leerRegalo(id).subscribe((respuesta: any) => {
      if (respuesta.resultado === 'bien') {
        this.regalo = respuesta.datos;
        this.toastrService.info(respuesta.mensaje);
      } else {
        this.toastrService.error(respuesta.mensaje);
      }
    });
  }

  mostrarModalEditar(id: string) {
    this.regaloId = id;
    this.modalTitulo = 'Actualizar datos';
    this.modalBoton = 'Actualizar';
    this.modalColorBoton = 'warning';
    this.regalosService.leerRegalo(id).subscribe((respuesta: any) => {
      if (respuesta.resultado === 'bien') {
        this.regalo = respuesta.datos;
        this.toastrService.warning(respuesta.mensaje);
      } else {
        this.toastrService.error(respuesta.mensaje);
      }
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
      if (respuesta.resultado === 'bien') {
        this.todosLosRegalos = respuesta.datos;
        this.toastrService.info(respuesta.mensaje);
      } else {
        this.toastrService.error(respuesta.mensaje);
      }
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.sesionService.validarToken(token).subscribe((respuesta: any) => {
        if (respuesta.resultado === 'bien') {
          this.nombreUsuario = respuesta.datos.nombre;
          this.obtenerTodosLosRegalos();
        } else {
          this.sesionService.cerrarSesion();
        }
      });
    } else {
      this.sesionService.cerrarSesion();
    }
  }
}
