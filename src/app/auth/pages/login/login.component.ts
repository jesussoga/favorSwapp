import {Component} from '@angular/core';
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

  public credencialesNoValidas: boolean;
  public procesoLogin: boolean;
  public cerrarDialogoLogin: boolean;


  constructor(
    private router: Router,
    private authService: AuthService

  ) {
    this.usuarioCorreo = "";
    this.usuarioClave = "";
    this.credencialesNoValidas = false;
    this.procesoLogin = false;
    this.cerrarDialogoLogin = true;
  }
  public login() {
    this.procesoLogin = true;
    this.authService.autorizar(this.usuarioCorreo, this.usuarioClave).subscribe({
      next: (datos: Usuario)=>{
        this.procesoLogin = false;
        console.log("Los datos son: " + datos);
        if(datos == null){
          this.credencialesNoValidas = true;
        }else{
          this.credencialesNoValidas = false;
          this.router.navigate(["/"])
        }
      },
      error:(error: HttpErrorResponse)=>{
        this.procesoLogin = false;
        this.credencialesNoValidas = true;
        console.error("Hubo un error al autenticar", error);
      }
    });
    // this.router.navigate(['/usuarios']);
  }

  logout() {
    this.authService.logout();
    this.procesoLogin = false;
    this.router.navigate(['/'])
  }

  public cerrarDialogo(){
    this.cerrarDialogoLogin = false;
    this.router.navigate(['/'])
  }
}
