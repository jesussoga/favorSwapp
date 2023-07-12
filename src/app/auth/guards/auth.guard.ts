import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {tap} from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);

  return authService.verificarLocalStorage().pipe(
    tap((estaAutenticado)=>{
      if (estaAutenticado) {
        console.info("Autenticado");
      } else {
        console.error("Esa id no existe");
      }
    })
  );
};
