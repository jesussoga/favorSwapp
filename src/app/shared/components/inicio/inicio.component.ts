import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  verFavores() {
    console.log("Hemos pulsado en 'ver favor'")
  }

  agregarFavor() {
    console.log("Hemos pulsado en 'agregar favor'")
  }
}
