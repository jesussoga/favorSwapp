import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FooterComponent } from './components/footer/footer.component';
import {PrimengModule} from "../primeng/primeng.module";



@NgModule({
    declarations: [
        InicioComponent,
        NavComponent,
        FiltrosComponent,
        FooterComponent
    ],
  exports: [
    NavComponent,
    FooterComponent,
    InicioComponent,

  ],
  imports: [
    CommonModule,
    PrimengModule
  ]
})
export class SharedModule { }
