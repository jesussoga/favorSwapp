import { Injectable } from '@angular/core';
import {Usuario} from "../models/favor.models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BackService} from "../../service/back.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url: string;
  constructor(
    private httpClient: HttpClient,
    private back: BackService
  )
  {
    this.url =`${back.url}/api/v1/usuarios`;
  }

  public guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url , usuario);
  }
}
