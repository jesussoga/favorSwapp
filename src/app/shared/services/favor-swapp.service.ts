import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Favor} from "../models/favor.models";

@Injectable({
  providedIn: 'root'
})
export class FavorSwappService {

  public url : string = "http://192.168.0.172:8080/api/v1/favores";
  constructor(private httpClient: HttpClient) { }

  public obtenerTodosLosFavores(): Observable<Favor[]> {
    return this.httpClient.get<Favor[]>(this.url);
  }

  public guardarFavor(favor: Favor): Observable<Favor> {
    return this.httpClient.post<Favor>(this.url , favor);
  }
}
