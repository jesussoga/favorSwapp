import { Injectable } from '@angular/core';
import {Usuario} from "../models/favor.models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url : string = "http://192.168.0.15:8080/api/v1/usuarios";


  constructor(
    private httpClient: HttpClient,
  ) {

  }

  public guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url , usuario);
  }
}
