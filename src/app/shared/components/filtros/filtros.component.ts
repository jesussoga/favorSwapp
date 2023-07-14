import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FavorSwappService} from "../../services/favor-swapp.service";
import {Favor, Provincia} from "../../models/favor.models";
import {ProvinciasService} from "../../services/provincias.service";
import {PrimeIcons} from "primeng/api";


@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit{

  public pruebasDesarrollo: boolean;
  public dialogoContactar: boolean;
  public idProvinciaElegida: string;
  public provincias: Provincia[];
  public favoresOriginal: Favor[];
  public favoresFiltrados: Favor[];
  public filtros: any[];
  public filtrosSeleccionados: any[];
  public favorDialogo?: Favor | null;

  constructor(
    private provinciasService: ProvinciasService,
    private favoresService: FavorSwappService
  ) {
    this.pruebasDesarrollo = false;
    this.dialogoContactar = false;
    this.idProvinciaElegida = "";
    this.favoresOriginal = [];
    this.favoresFiltrados = [];
    this.filtros = [
      // { nombre: 'Provincia',icon: 'fa-solid fa-location-dot', valor: false, funcion: this.filtroProvincia},
      { nombre: 'Fumar', icon: 'fa-solid fa-smoking', valor: false, funcion: this.filtroFumar},
      { nombre: 'Internet', icon: 'fa-solid fa-wifi', valor: false, funcion: this.filtroInternet},
      { nombre: 'Mascota', icon: 'fa-solid fa-paw', valor: false, funcion: this.filtroMascota},
      { nombre: 'Climatización', icon: 'fa-solid fa-temperature-low', valor: false, funcion: this.filtroClimatizado},
      { nombre: 'Movilidad reducida',icon: 'fa-solid fa-wheelchair', valor: false, funcion: this.filtroAdaptadoMovilidadReducida},
    ];
    this.filtrosSeleccionados = [];
    this.provincias = [];
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
    this.favoresService.obtenerTodosLosFavores().subscribe(
      {
        next: (datos: Favor[]) => {
          this.favoresOriginal = datos;
          this.favoresFiltrados = datos;
        },
        error: (error: HttpErrorResponse) => {
          console.error(error);
        }
      }
    );
  }


  public abrirDialogoContacto(favor: Favor) {
    this.favorDialogo = favor;
    this.dialogoContactar = true;
  }

  public aplicarFiltros() {
    this.favoresFiltrados = [...this.favoresOriginal]; // Hacemos una copia del array original

    // Recorremos los filtros seleccionados, aplicando la función definida. Al final tendremos en arrayFiltrado el resultado de filtrar todos los filtros seleccionados
    for (let filtro of this.filtrosSeleccionados) {
      this.favoresFiltrados = this.favoresFiltrados.filter(elemento => filtro.funcion(elemento, this.idProvinciaElegida));
    }

    console.log("ArrayFiltrado: ", this.favoresFiltrados); // Array filtrado
    // this.favoresOriginal = this.favoresFiltrados; // Ya lo podemos machacar
  }

  public filtroAdaptadoMovilidadReducida(favor: Favor): boolean {
    return favor.adaptadoMovilidadReducida;
  }

  //region Funciones para filtrar
  public filtroFumar(favor: Favor): boolean {
    return favor.fumar;
  }

  public filtroClimatizado(favor: Favor): boolean {
    return favor.climatizacion;
  }

  public filtroInternet(favor: Favor): boolean {
    return favor.internet;
  }

  public filtroMascota(favor: Favor): boolean {
    return favor.mascota;
  }

  public filtroProvincia(favor: Favor, idProvincia: string): boolean {
    if (idProvincia == "00"){
      return true;
    } else {
      return idProvincia === favor.usuario.direccion.provincia.id;
    }
  }
  //endregion

  public cambiarProvincia() {
    // this.filtrosSeleccionados = [];
    if (this.idProvinciaElegida){
      this.filtrosSeleccionados.push( { nombre: 'Provincia', valor: false, funcion: this.filtroProvincia});
      this.aplicarFiltros();
    }
  }
}


