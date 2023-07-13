import {Component, OnInit} from '@angular/core';
import {ProvinciasService} from "../../../shared/services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Provincia} from "../../../shared/models/provincia.models";


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  public provincias!: Provincia[];
  public registro: boolean = false;
  public value!: String;

  constructor(private provinciasService: ProvinciasService) {
  }
  public abrirDialogo() {
    this.registro = true;
  }
  public cerrarDialogo() {
    this.registro = false;
  }



  ngOnInit() {
    // Aquí obtenemos todas las provincias
    this.provinciasService.obtenerTodasProvincias().subscribe(
      {
        next: (datos: Provincia[]) => {
          this.provincias = datos;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        }
      }
    );
  }


}
