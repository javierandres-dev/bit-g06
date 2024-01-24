import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { FundamentosComponent } from './components/fundamentos/fundamentos.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent, title: 'Inicio' },
  {
    path: 'fundamentos',
    component: FundamentosComponent,
    title: 'Fundamentos',
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent, title: '404' },
];
