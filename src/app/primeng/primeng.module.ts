import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule} from "primeng/checkbox";
import { CommonModule } from '@angular/common';
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {InputSwitchModule} from "primeng/inputswitch";
import {InputTextModule} from "primeng/inputtext";
import {MenubarModule} from "primeng/menubar";
import {PasswordModule} from "primeng/password";
import {RippleModule} from "primeng/ripple";
import {SelectButtonModule} from "primeng/selectbutton";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";
import {CalendarModule} from "primeng/calendar";
import {KeyFilterModule} from "primeng/keyfilter";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    CardModule,
    CheckboxModule,
    DialogModule,
    DropdownModule,
    InputSwitchModule,
    InputTextModule,
    KeyFilterModule,
    MenubarModule,
    PasswordModule,
    RippleModule,
    SelectButtonModule,
    TagModule,
    ToastModule,
    TooltipModule,

    // Por favor añadirlos alfabéticamente
  ]
})
export class PrimengModule { }
