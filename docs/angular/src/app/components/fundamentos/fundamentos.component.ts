import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [PadreComponent],
  templateUrl: './fundamentos.component.html',
  styleUrl: './fundamentos.component.css',
})
export class FundamentosComponent {
  nombreUsuario: string = 'Pepita';
  estaLogueado: boolean = false;
  frameworks: string[] = ['angular', 'react', 'vue', 'svelte'];
  desarrolladores: any[] = [
    {
      id: 1,
      nombre: 'Laura',
    },
    {
      id: 2,
      nombre: 'Darly',
    },
  ];
  bgColor: string = 'caja-uno';
  manejarClick() {
    alert('Hiciste click');
    console.log('hiciste click');
  }
  manejarMouseover() {
    console.log('HEY pasó mouse');
  }
  manejarMousedown() {
    console.log('presionado...');
    this.bgColor = 'caja-dos';
  }
  manejarMouseup() {
    this.bgColor = 'caja-tres';
  }
}
