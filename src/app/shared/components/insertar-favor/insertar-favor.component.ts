import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Favor} from "../../models/favor.models";
import {FavorSwappService} from "../../services/favor-swapp.service";
import {AuthService} from "../../../auth/services/auth.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-insertar-favor',
  templateUrl: './insertar-favor.component.html',
  styleUrls: ['./insertar-favor.component.css'],
  providers: [MessageService],
})
export class InsertarFavorComponent implements OnInit{

  public pruebasDesarrollo: boolean;
  public formFavor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private favorService: FavorSwappService,
    private _authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {
    this.pruebasDesarrollo = false;
  }
  ngOnInit(): void {
    this.obtenerFormulario();
  }

  public obtenerFormulario(){
    this.formFavor = this.formBuilder.group({
      id                              : [0, []],
      foto                            : ["", [Validators.required]],
      descripcion                     : ["", [Validators.required]],
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
    this.guardaFavor(favor);
  }

  public guardaFavor(favor: Favor) {
    // console.log(favor);
    this.favorService.guardarFavor(favor).subscribe({
      next : () => {},
      error : () => {}
    });
    this.borrarFormulario();
  }

  public borrarFormulario() {
    this.formFavor.reset();
    this.obtenerFormulario();
  }

  get usuarioActivo(): AuthService{
    return this._authService;
  }

  public mensajeGuardado() {
    this.messageService.add({ severity: 'success', summary: 'Favor guardado correctamente' });
  }

  public salir() {
    this.router.navigate(["/"])
  }
}

