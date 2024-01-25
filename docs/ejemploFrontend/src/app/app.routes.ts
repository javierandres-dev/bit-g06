import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioDeSesionComponent } from './components/inicio-de-sesion/inicio-de-sesion.component';
import { RegalosComponent } from './components/regalos/regalos.component';
import { Error404Component } from './components/error404/error404.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  {
    path: 'inicio-de-sesion',
    component: InicioDeSesionComponent,
    title: 'Inicio de sesión',
  },
  { path: 'regalos', component: RegalosComponent, title: 'regalos' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: Error404Component, title: 'Error 404' },
];
