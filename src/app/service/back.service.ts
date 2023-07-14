import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private ip: string = "http://192.168.0.172";        //-> Aquí la url del backend
  private puerto: string = ":8080";                   //-> Aquí el puerto
  private _url: string = this.ip + this.puerto;
  constructor() {}
  get url(): string {
    return this._url;
  }
}
