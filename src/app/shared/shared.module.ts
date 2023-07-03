import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    InicioComponent,
    NavComponent,
    FiltrosComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
