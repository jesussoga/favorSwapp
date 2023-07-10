import {Component, OnInit} from '@angular/core';
import { ProvinciasService } from '../../services/provincias.service';
import { Provincia } from '../../models/provincia.models';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {FavorSwappService} from "../../services/favor-swapp.service";
import {Favor} from "../../models/favor.models";

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit{

  public pruebasDesarrollo: boolean;
  public dialogoContactar: boolean;
  public fumar: boolean;
  public internet: boolean;
  public mascota: boolean;
  public climatizacion: boolean;
  public movilidadReducida: boolean;
  public provinciaElegida: string;
  public provincias: Provincia[];
  public favores: Favor[];
  public favoresFiltrados: Favor[];
  public favorDialogo?: Favor | null;

  constructor(
    private provinciasService: ProvinciasService,
    private favorService: FavorSwappService
  ) {
    this.pruebasDesarrollo = false;
    this.dialogoContactar = false;
    this.fumar = false;
    this.internet = false;
    this.mascota = false;
    this.climatizacion = false;
    this.movilidadReducida = false;
    this.provinciaElegida = "";
    this.provincias = [];
    this.favores = [];
    this.favoresFiltrados = [];
    this.favorDialogo = null;
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

  // public filtrarObjetosPorCampos(objetos: Favor[], campos: string[]): Objeto[] {
  //   return objetos.filter(objeto => {
  //     // Verificar si todos los campos especificados están establecidos en verdadero (true)
  //     return campos.every(campo => objeto[campo]);
  //   });
  // }


  public abrirDialogoContacto(favor: Favor) {
    this.favorDialogo = favor;
    this.dialogoContactar = true;
  }
}
