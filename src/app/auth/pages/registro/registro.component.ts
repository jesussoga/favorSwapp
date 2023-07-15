import {Component, OnInit} from '@angular/core';
import {ProvinciasService} from "../../../shared/services/provincias.service";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup} from "@angular/forms";
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
    const tema: string | null = localStorage.getItem("tema"); // Para leer y aplicar tema si está guardado
    if (tema != null){
      this.tema.cambiarTema(tema);
    }
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
      nombre                          : [""],
      apellido1                       : [""],
      apellido2                       : [""],
      telefono                        : [""],
      fechaNacimiento                 : [""],
      idDireccion                     : [0],
      direccion                       : [""],
      idProvincia                     : [""],
      email                           : [""],
      clave                           : [""],
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

}
