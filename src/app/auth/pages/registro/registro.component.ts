import {Component, OnInit} from '@angular/core';
import {Provincia} from "../../../shared/models/favor.models";
import {ProvinciasService} from "../../../shared/services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService],
})
export class RegistroComponent implements OnInit{
  public provincias: Provincia[];
  public formRegistro!: FormGroup;
  public pruebasDesarrollo: boolean;
  constructor(
    private provinciasService: ProvinciasService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ){
    this.provincias = [];
    this.pruebasDesarrollo = true;
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

  public formularioRegistro(){
    this.formRegistro = this.formBuilder.group({
      id                              : [0, []],
      nombre                          : [""],
      primerAp                        : [""],
      segundoAp                       : [""],
      // descripcion                     : [""],
      // provincia                       : [""],
      // telefono                        : [""],
      // email                           : [""],
    });
  }

  public validarRegistro() {
    this.messageService.add({ severity: 'success', summary: 'Usuario registrado correctamente' });
  }
}
