import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Usuario} from "../../shared/models/favor.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private _usuarioActivo: Usuario | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }

  get usuarioActivo(): Usuario | undefined {
    return {...this._usuarioActivo!};
  }

  public autorizar(correo: string, clave: string): Observable<Usuario[]>{
    const peticion: string =`http://localhost:3000/usuarios?correo=${correo}&clave=${clave}` ;
    return this.httpClient.get<Usuario[]>(peticion)
      .pipe(
        tap((datos: Usuario[])=>{
          if (datos.length > 0){
            this._usuarioActivo = datos[0];
          }
        })
      );
  }
  public autorizarPorId(id: number): Observable<Usuario>
  {
    const peticion: string =`http://localhost:3000/usuarios/${id}` ;

    return this.httpClient.get<Usuario>(peticion);
  }

}
