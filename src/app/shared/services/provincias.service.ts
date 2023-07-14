import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Provincia} from "../models/provincia.models";
import {BackService} from "../../service/back.service";

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  public url : string;
  constructor(
    private httpClient: HttpClient,
    private back: BackService
  )
  {
    this.url =`${back.url}/api/v1/provincias`;
  }


  public obtenerTodasProvincias(): Observable<Provincia[]> {
    return this.httpClient.get<Provincia[]>(this.url);
  }

  public obtenerProvinciaPorId(idProvincia : string): Observable<Provincia> {
    return this.httpClient.get<Provincia>(this.url + "/" + idProvincia);
  }

}
