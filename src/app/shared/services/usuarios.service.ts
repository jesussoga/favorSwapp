import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../models/favor.models";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url : string = "http://192.168.0.172:8080/api/v1/usuarios";
  constructor(private httpClient: HttpClient) { }


  public obtenerTodosLosUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  public obtenerUsuarioPorId(idUsuario: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + "/" + idUsuario);
  }

}
