import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public visibleTerminos: boolean = false;
  public visiblePrivacidad: boolean = false;
  public visibleCookies: boolean = false;
  constructor() {
  }
  public abrirPoliticaDePrivacidad() {
    this.visiblePrivacidad = true;
  }
  public cerrarPoliticaDePrivacidad() {
    this.visiblePrivacidad = false;
  }
  public abrirDialogoTerminosYCondiciones() {
    this.visibleTerminos = true;
  }
  public cerrarDialogoTerminosYCondiciones() {
    this.visibleTerminos = false;
  }


  public abrirPoliticaDeCookies() {
    this.visibleCookies = true;
  }
  public cerrarPoliticaDeCookies() {
    this.visibleCookies = false;
  }
}
