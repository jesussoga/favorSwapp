import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public cambiarTema(tema: string) {
    //Guardamos en una variable el elemento link del index.html
    let themeLink: HTMLLinkElement = this.document.getElementById('app-theme') as HTMLLinkElement;
    //Y si existe, modifica el href al tema indicado + .css
    if (themeLink) {
      themeLink.href = tema + '.css';
    }
  }
  public temaInicio(){
    const tema: string | null = localStorage.getItem("tema"); // Para leer y aplicar tema si está guardado
    if (tema != null){
      this.cambiarTema(tema);
    }
  }

}
