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

  public pruebasDesarrollo: boolean;
  public dialogoContactar: boolean;
  public provinciaElegida: string;
  public todosLosFiltros: string[];
  public nombreDeFiltros: any[];
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
    this.provinciaElegida = "";
    this.todosLosFiltros = [];
    this.nombreDeFiltros = [
      { nombre: 'Fumar', icon: ''},
      { nombre: 'Internet', icon: 'pi pi-wifi'},
      { nombre: 'Mascota', icon: ''},
      { nombre: 'Climatizacion', icon: 'pi pi-sun'},
      { nombre: 'Movilidad reducida'}
    ];
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
