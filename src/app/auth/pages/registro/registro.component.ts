import {Component, OnInit} from '@angular/core';
import {ProvinciasService} from "../../../shared/services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Direccion, Provincia, Usuario} from "../../../shared/models/usuario.models";
import {UsuarioService} from "../../../shared/services/usuario.service";
import {ThemeService} from "../../../shared/services/theme.service";


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
    private tema: ThemeService,
  ){
    this.provincias = [];
    this.idProvinciaElegida = "29";
    this.pruebasDesarrollo = false;
    this.clave = "";
    this.usuarioClave2 = "";
  }

  ngOnInit() {
    this.tema.temaInicio(); // Carga el tema para que haya guardado en el navegador, si existe.
    // Aquí obtenemos todas las provincias
    this.provinciasService.obtenerTodasProvincias().subscribe(
      {
        next: (datos: Provincia[]) => {
          this.provincias = datos;
          this.provincias.shift();
        },
        error: (error: HttpErrorResponse) => {
          this.messageService.add({ severity: 'error', summary: "Error al cargar las provincias" });
          console.error(error.message);
        }
      }
    );
    this.inicializarFormularioRegistro();
  }

  public inicializarFormularioRegistro(){
    const regexEmail :string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    const claveDigitosMax: number = 8;
    const regexClave :string = `^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{${claveDigitosMax},}$`;
    this.formRegistroUsuario = this.formBuilder.group({
      id                              : [0],
      nombre                          : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      apellido1                       : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      apellido2                       : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      fechaNacimiento                 : ["", [Validators.required]],
      idProvincia                     : ["", [Validators.required]],
      direccion                       : ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      idDireccion                     : [0],
      email                           : ["", [Validators.required, Validators.pattern(regexEmail)]],
      telefono                        : ["", [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      clave                           : ["", [Validators.required, Validators.pattern(regexClave)]],
      usuarioClave2                   : ["", [Validators.required, Validators.pattern(regexClave)]],
    });
  }

  public validarUsuario(){
    if (this.comprobarClave() && this.formRegistroUsuario.valid){
      this.guardarUsuario(this.crearUsuario());
    } else {
      this.marcarTodosLosCampos();
    }
  }

  public crearUsuario(): Usuario {
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
        this.messageService.add({ severity: 'error', summary: "Error al añadir usuario" });
        console.error(datos.message);
      }
    });
  }

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
