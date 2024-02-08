import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SesionService } from '../services/sesion.service';

export const activarGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sesionService = inject(SesionService);

  if (sesionService.estaLogueado()) {
    return true;
  } else {
    router.navigateByUrl('/inicio-de-sesion');
    return false;
  }
};
