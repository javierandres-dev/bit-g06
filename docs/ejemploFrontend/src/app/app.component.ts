import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavegacionComponent],
  template: `<app-navegacion /><router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}
