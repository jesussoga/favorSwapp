import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./shared/components/inicio/inicio.component";
import {FiltrosComponent} from "./shared/components/filtros/filtros.component";
import {InsertarFavorComponent} from "./shared/components/insertar-favor/insertar-favor.component";

const routes: Routes = [
  {path: "", component: InicioComponent, pathMatch: "full"},
  {path: "filtros", component: FiltrosComponent},
  {path: "insertar-favor", component: InsertarFavorComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
