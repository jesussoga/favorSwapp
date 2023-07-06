export interface Favor {
  foto:                      string;
  fumar:                     boolean;
  internet:                  boolean;
  mascota:                   boolean;
  climatizacion:             boolean;
  adaptadoMovilidadReducida: boolean;
  _links:                    Links;
}

export interface Links {
  self:    FavorClass;
  favor:   FavorClass;
  usuario: FavorClass;
}

export interface FavorClass {
  href: string;
}
