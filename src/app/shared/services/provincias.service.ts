import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provincia} from "../models/provincia.models";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  public url : string = "http://192.168.0.172:8080/api/v1/provincias";
  constructor(private httpClient: HttpClient) { }


  public obtenerTodasProvincias(): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.url);
  }

  public obtenerProvinciaPorId(idProvincia : string): Observable<Provincia> {
    return this.httpClient.get<Provincia>(this.url + "/" + idProvincia);
  }

}
