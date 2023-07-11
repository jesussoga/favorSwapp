import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Favor, Provincia} from "../../models/favor.models";
import {FavorSwappService} from "../../services/favor-swapp.service";
import {ProvinciasService} from "../../services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-insertar-favor',
  templateUrl: './insertar-favor.component.html',
  styleUrls: ['./insertar-favor.component.css']
})
export class InsertarFavorComponent implements OnInit{

  public pruebasDesarrolo: boolean;
  public provincias: Provincia[];
  public formFavor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private favorService: FavorSwappService,
    private provinciasService: ProvinciasService
  ) {
    this.pruebasDesarrolo = true;
    this.provincias = [];
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

    this.obtenerFormulario();
  }

  public obtenerFormulario(){
    this.formFavor = this.formBuilder.group({
      id                              : [0, []],
      foto                            : ["", [Validators.required]],
      descripcion                     : ["", [Validators.required]],
      idProvincia                      : [""],

      nombre                          : ["", [Validators.required]],
      primerAp                        : ["", [Validators.required]],
      segundoAp                       : ["", []],
      telefono                        : ["", [Validators.required]],
      email                           : ["", [Validators.required]],
      fumar                           : [false, []],
      internet                        : [false, []],
      mascota                         : [false, []],
      climatizacion                   : [false, []],
      adaptadoMovilidadReducida       : [false, []]
    });

  }

  public validarFavor(){
    let favor: Favor = this.formFavor.value;
    this.guardaFavor(favor);
  }

  public guardaFavor(favor: Favor) {
    // TODO
    console.log(favor);
    this.favorService.guardarFavor(favor).subscribe({
      next : () => {},
      error : () => {}
    });
  }

  public borrarFormulario() {
    this.formFavor.reset();
  }
}

