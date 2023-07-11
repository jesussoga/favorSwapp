import {Component, OnInit} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import {FavorSwappService} from "../../services/favor-swapp.service";
import {Favor, Provincia} from "../../models/favor.models";
import {ProvinciasService} from "../../services/provincias.service";


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit{

  public pruebasDesarrolo: boolean;
  public fumar: boolean;
  public internet: boolean;
  public mascota: boolean;
  public climatizacion: boolean;
  public movilidadReducida: boolean;
  public provinciaElegida: string;
  public provincias: Provincia[];
  public favores: Favor[];
  public favoresFiltrados: Favor[];

  constructor(
    private provinciasService: ProvinciasService,
    private favorService: FavorSwappService
  ) {
    this.pruebasDesarrolo = true;
    this.fumar = false;
    this.internet = false;
    this.mascota = false;
    this.climatizacion = false;
    this.movilidadReducida = false;
    this.provinciaElegida = "";
    this.provincias = [];
    this.favores = [];
    this.favoresFiltrados = [];
  }

  ngOnInit(): void {
    // Aquí obtnemos todas las provincias
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

    // Aquí obtenemos todos los favores
    this.favorService.obtenerTodosLosFavores().subscribe(
      {
        next: (datos: Favor[]) => {
          this.favores = datos;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        }
      }
    );




  }

  // filtrarObjetosPorCampos(objetos: Favor[], campos: string[]): Objeto[] {
  //   return objetos.filter(objeto => {
  //     // Verificar si todos los campos especificados están establecidos en verdadero (true)
  //     return campos.every(campo => objeto[campo]);
  //   });
  // }


}
