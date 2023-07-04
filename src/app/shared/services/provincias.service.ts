import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provincia} from "../models/provincia.models";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  public url : string = "http://localhost:8080/api/v1/provincias";
  constructor(private httpClient: HttpClient) { }


  public obtenerTodasProvincias(): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.url);
  }

  public obtenerProvinciaPorId(provincia : string): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.url + "/" + provincia);
  }

}
