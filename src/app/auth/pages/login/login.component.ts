import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Usuario} from "../../../shared/models/favor.models";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuarioCorreo: string;
  public usuarioClave: string;

  public mensajelesNoValidas: boolean;
  public procesoLogin: boolean;


  constructor(
    private router: Router,
    private authService: AuthService

  ) {
    this.usuarioCorreo = "";
    this.usuarioClave = "";
    this.mensajelesNoValidas = false;
    this.procesoLogin = false;
  }
  public login() {
    this.procesoLogin = true;
    this.authService.autorizar(this.usuarioCorreo, this.usuarioClave).subscribe(
      {
        next: (datos: Usuario[])=>{
          this.procesoLogin = false
          if(datos.length == 0){
            this.mensajelesNoValidas = true;
          }else{
            this.mensajelesNoValidas = false;
            this.router.navigate(["/usuarios"])
          }
        },
        error: (datos: HttpErrorResponse)=>{
          this.procesoLogin = false;
          console.error("Hubo un error al autenticar", datos);
        }
      }
    );

    // this.router.navigate(['/usuarios']);
  }
}
