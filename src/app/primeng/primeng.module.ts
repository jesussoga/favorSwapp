import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    RippleModule,

  ]
})
export class PrimengModule { }
