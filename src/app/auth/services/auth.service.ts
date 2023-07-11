import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of, tap} from "rxjs";
import {Usuario} from "../../shared/models/favor.models";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _usuarioActivo: Usuario | undefined;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  get usuarioActivo(): Usuario | undefined {
    return {...this._usuarioActivo!};
  }

  public autorizar(correo: string, clave: string): Observable<Usuario>{
    const peticion: string =`http://localhost:8080/api/v1/usuarios/${correo}/${clave}` ;
    return this.httpClient.get<Usuario>(peticion)
      .pipe(
        tap((datos: Usuario)=>{
          this._usuarioActivo = datos;
          localStorage.setItem("usuarioActivo", this._usuarioActivo.id!.toString());
        })
      );
  }
  public autorizarPorId(id: number): Observable<Usuario>
  {
    const peticion: string =`http://localhost:8080/api/v1/usuarios/${id}` ;

    return this.httpClient.get<Usuario>(peticion);
  }
  public verificarLocalStorage(): Observable<boolean> {
    const idUsuarioActivoLocalStorage: string | null = localStorage.getItem("usuarioActivo");

    if (idUsuarioActivoLocalStorage == null) {
      //Esto es que no existe
      return of(false); // --> retornaría un Observable<boolean> con el valor false
    } else {
      //Esto es que si existe, y vamos a verificar que esa id exista
      return this.autorizarPorId(Number(idUsuarioActivoLocalStorage))
        .pipe(
          map((datos: Usuario) => {
              this._usuarioActivo = datos; // Guardamos en el servicio el usuario activo
              return true;
            }
          )
        );
    }
  }
  public logout(){
    this._usuarioActivo = undefined;
    localStorage.removeItem("usuarioActivo");
    this.router.navigate(["/auth"]);
  }
}
