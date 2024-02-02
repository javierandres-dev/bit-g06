import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { RegalosComponent } from './components/regalos/regalos.component';
import { PaginaDeErrorComponent } from './components/pagina-de-error/pagina-de-error.component';

export const routes: Routes = [
  {
    path: 'inicio-de-sesion',
    component: InicioDeSesionComponent,
    title: 'Inicio Sesión',
  },
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  { path: 'regalos', component: RegalosComponent, title: 'Regalos' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PaginaDeErrorComponent, title: '404' },
];
