import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {tap} from "rxjs";

export const authInicioGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.guardInicio().pipe(tap((controlInicio) => {})
  );
};
