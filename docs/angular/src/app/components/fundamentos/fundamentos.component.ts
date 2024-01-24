import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  standalone: true,
  imports: [],
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
}
