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

export interface Direccion {
  id:        number;
  direccion: string;
  provincia: Provincia;
}

export interface Provincia {
  id:     string;
  nombre: string;
}
