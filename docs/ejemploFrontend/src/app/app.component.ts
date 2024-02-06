import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavegacionComponent],
  template: `<app-navegacion />
    <main class="container"><router-outlet></router-outlet></main>`,
  styles: ``,
})
export class AppComponent {}
