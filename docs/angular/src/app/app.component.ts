import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
