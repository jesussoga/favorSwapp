import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./shared/components/inicio/inicio.component";
import {FiltrosComponent} from "./shared/components/filtros/filtros.component";
import {InsertarFavorComponent} from "./shared/components/insertar-favor/insertar-favor.component";
import {authGuard} from "./auth/guards/auth.guard";
import {authInicioGuard} from "./auth/guards/authInicio.guard";

const routes: Routes = [
  //{path: "", redirectTo: "auth", pathMatch: "full"},
  {path: "", component: InicioComponent, canActivate: [authInicioGuard],pathMatch: "full"},
  {path: "filtros", component: FiltrosComponent, canActivate: [authInicioGuard]},
  {path: "insertar-favor", component: InsertarFavorComponent, canActivate: [authGuard]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
