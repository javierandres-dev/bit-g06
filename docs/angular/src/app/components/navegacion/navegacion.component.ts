import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink],
  template: `<nav>
    <a routerLink="/inicio">Inicio</a> |
    <a routerLink="/fundamentos">Fundamentos</a>
  </nav>`,
  styles: `nav {text-align: center}`,
})
export class NavegacionComponent {}
