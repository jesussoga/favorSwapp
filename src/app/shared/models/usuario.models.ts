import {Direccion} from "./favor.models";

export interface Usuario {
  id:              number;
  nombre:          string;
  apellido1:       string;
  apellido2:       string;
  telefono:        string;
  fechaNacimiento: Date;
  direccion:       Direccion;
  email:           string;
  clave:           string;
}
