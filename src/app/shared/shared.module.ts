import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FooterComponent } from './components/footer/footer.component';
import {PrimengModule} from "../primeng/primeng.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { InsertarFavorComponent } from './components/insertar-favor/insertar-favor.component';



@NgModule({
    declarations: [
        InicioComponent,
        NavComponent,
        FiltrosComponent,
        FooterComponent,
        InsertarFavorComponent
    ],
    exports: [
        NavComponent,
        FooterComponent,
        InicioComponent,
        FiltrosComponent,
        InsertarFavorComponent,

    ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
