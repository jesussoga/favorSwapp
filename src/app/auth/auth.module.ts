import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {PrimengModule} from "../primeng/primeng.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent
    ],
    exports: [
        RegistroComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PrimengModule,
        FormsModule,
        HttpClientModule
    ]
})
export class AuthModule { }
