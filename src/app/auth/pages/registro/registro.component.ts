import {Component, OnInit} from '@angular/core';
import {ProvinciasService} from "../../../shared/services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Direccion, Provincia, Usuario} from "../../../shared/models/usuario.models";
import {UsuarioService} from "../../../shared/services/usuario.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [MessageService],
})
export class RegistroComponent implements OnInit{

  public provincias: Provincia[];
  public formRegistroUsuario!: FormGroup;
  public pruebasDesarrollo: boolean;
  public idProvinciaElegida: string;
  public clave: string;
  public usuarioClave2: string;

  constructor(
    private provinciasService: ProvinciasService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private usuarioService: UsuarioService,
  ){
    this.provincias = [];
    this.idProvinciaElegida = "29";
    this.pruebasDesarrollo = false;
    this.clave = "";
    this.usuarioClave2 = "";
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

    this.inicializarFormularioRegistro();
  }

  public inicializarFormularioRegistro(){
    this.formRegistroUsuario = this.formBuilder.group({
      id                              : [0],
      nombre                          : ["", [Validators.required]],
      apellido1                       : ["", [Validators.required]],
      apellido2                       : ["", [Validators.required]],
      telefono                        : ["", [Validators.required]],
      fechaNacimiento                 : ["", [Validators.required]],
      idDireccion                     : [0],
      direccion                       : ["", [Validators.required]],
      idProvincia                     : ["", [Validators.required]],
      email                           : ["", [Validators.required]],
      clave                           : ["", [Validators.required]],
      usuarioClave2                   : ["", [Validators.required]],
    });
  }

  public validarUsuario(){
    this.guardarUsuario(this.crearUsurio());

  }

  public crearUsurio(): Usuario {
    let usuarioFormulario: any = this.formRegistroUsuario.value;
    let provincia: Provincia | undefined = this.obtenerProvinciaPorId(usuarioFormulario.idProvincia);
    let idDireccion = usuarioFormulario.idDireccion;
    let calle = usuarioFormulario.direccion;
    let direccion: Direccion = {id: idDireccion, direccion: calle, provincia: provincia!};

    // console.log("usuario: ", usuarioGuardar);
    // console.log('provincia ',provincia);
    // console.log('direccion', direccion);
    // console.log(usuarioFormulario);
    return {
      id: 0,
      nombre: usuarioFormulario.nombre,
      apellido1: usuarioFormulario.apellido1,
      apellido2: usuarioFormulario.apellido2,
      telefono: usuarioFormulario.telefono,
      fechaNacimiento: usuarioFormulario.fechaNacimiento,
      direccion: direccion,
      email: usuarioFormulario.email,
      clave: usuarioFormulario.clave

    };
  }

  public guardarUsuario(usuario: Usuario) {
    this.usuarioService.guardarUsuario(usuario).subscribe({
      next  : () => {
        this.messageService.add({ severity: 'success', summary: 'Usuario registrado correctamente' });
      },
      error : (datos: HttpErrorResponse) => {
        this.messageService.add({ severity: 'error', summary: datos.message });
      }
    });
  }

  // public obtenerProvinciaPorId(id: string) : string | undefined{
  //   const provinciaEncontrada = this.provincias.find(provincia => provincia.id === id)
  //   return provinciaEncontrada?.nombre;
  // }

  public obtenerProvinciaPorId(id: string) : Provincia| undefined{
    return this.provincias.find(provincia => provincia.id === id)
  }

  public esCampoInvalido(campo: string) : boolean {
    return this.formRegistroUsuario.controls[campo].invalid && this.formRegistroUsuario.controls[campo].touched;
  }

  public marcarTodosLosCampos() {
    this.formRegistroUsuario.markAllAsTouched();
  }

  public comprobarClave(): boolean{
    return this.clave === this.usuarioClave2;
  }

  public borrarFormulario() {
    this.formRegistroUsuario.reset();
  }
}
