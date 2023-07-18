import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Favor} from "../../models/favor.models";
import {FavorSwappService} from "../../services/favor-swapp.service";
import {AuthService} from "../../../auth/services/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-insertar-favor',
  templateUrl: './insertar-favor.component.html',
  styleUrls: ['./insertar-favor.component.css'],
  providers: [MessageService],
})
export class InsertarFavorComponent implements OnInit{

  public pruebasDesarrollo: boolean;
  public formFavor!: FormGroup;
  public titulos: string[];

  constructor(
    private formBuilder: FormBuilder,
    private favorService: FavorSwappService,
    private _authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.pruebasDesarrollo = false;
    this.titulos = [
      "Habitación de 1 cama",
      "Habitación de 2 camas",
      "Habitación exterior",
      "Habitación interior",
      "Habitación con terraza",
    ];
  }
  ngOnInit(): void {
    this.inicializarFormulario();

  }

  public inicializarFormulario(){
    this.formFavor = this.formBuilder.group({
      id                              : [0, []],
      foto                            : ["", [Validators.maxLength(200)]],
      descripcion                     : ["", [Validators.required,]],
      provincia                       : [this.usuarioActivo.usuarioActivo?.direccion.provincia.nombre],
      usuario                         : [this.usuarioActivo.usuarioActivo],
      nombre                          : [this.usuarioActivo.usuarioActivo?.nombre],
      primerAp                        : [this.usuarioActivo.usuarioActivo?.apellido1],
      segundoAp                       : [this.usuarioActivo.usuarioActivo?.apellido2],
      telefono                        : [this.usuarioActivo.usuarioActivo?.telefono, [Validators.required]],
      email                           : [this.usuarioActivo.usuarioActivo?.email],
      fumar                           : [false, []],
      internet                        : [false, []],
      mascota                         : [false, []],
      climatizacion                   : [false, []],
      adaptadoMovilidadReducida       : [false, []]
    });

  }

  public validarFavor(){
    let favor: Favor = this.formFavor.value;
    if (favor.foto.length <= 6){
      favor.foto = "";
    }
    this.guardaFavor(favor);
  }

  public guardaFavor(favor: Favor) {
    // console.log(favor);
    this.favorService.guardarFavor(favor).subscribe({
      next : () => {
        this.messageService.add({ severity: 'success', summary: 'Favor guardado correctamente' });
      },
      error : (datos: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: datos.message });
      }
    });
    this.borrarFormulario();
  }

  public borrarFormulario() {
    this.formFavor.reset();
    this.inicializarFormulario();
  }

  get usuarioActivo(): AuthService{
    return this._authService;
  }


  // public salir() {
  //   this.router.navigate(["/"])
  // }

  public esCampoInvalido(campo: string) : boolean {
    return this.formFavor.controls[campo].invalid && this.formFavor.controls[campo].touched;
  }

  public marcarTodosLosCampos() {
    //Al ponerlos todos como marcados, me mostrará directamente todos los errores
    this.formFavor.markAllAsTouched();
  }


}

