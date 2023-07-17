import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Favor} from "../models/favor.models";
import {BackService} from "../../service/back.service";

@Injectable({
  providedIn: 'root'
})
export class FavorSwappService {
  public url : string;
  constructor(
    private httpClient: HttpClient,
    back: BackService)
  {
    this.url =`${back.url}/api/v1/favores`;
  }

  public obtenerTodosLosFavores(): Observable<Favor[]> {
    return this.httpClient.get<Favor[]>(this.url);
  }

  public guardarFavor(favor: Favor): Observable<Favor> {
    return this.httpClient.post<Favor>(this.url , favor);
  }
}
