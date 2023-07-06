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

  public ubicacion() {
    window.open('https://www.google.com/maps/place/Arelance/@36.7362451,-4.5512778,17.63z/data=!3m1!5s0xd72f0c4736ed7e3:0x1aa3a6ec29eaac09!4m6!3m5!1s0xd72f1e48a51fbbd:0x4203cd72d0662378!8m2!3d36.7376359!4d-4.5518856!16s%2Fg%2F11pklx084y?entry=ttu', '_blank')
  }

  public facebook() {
    window.open('https://www.facebook.com/', '_blank')
  }
  public twitter() {
    window.open('https://www.twitter.com/', '_blank')
  }
  public instagram() {
    window.open('https://www.instagram.com/', '_blank')
  }
}

