import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-insertar-favor',
  templateUrl: './insertar-favor.component.html',
  styleUrls: ['./insertar-favor.component.css']
})
export class InsertarFavorComponent implements OnInit{

  public pruebasDesarrolo: boolean;
  public formFavor!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.pruebasDesarrolo = true;
  }
  ngOnInit(): void {
    this.obtenerFormulario();
  }

  public obtenerFormulario(){
    const regexEmail: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    this.formFavor = this.formBuilder.group({
      nombre            : ["", [Validators.required]],
      primerApellido    : ["", [Validators.required]],
      segundoApellido   : ["", [Validators.required]],
      correo            : ["", [Validators.required, Validators.pattern(regexEmail)]],
      telefono          : ["", Validators.required],
      fumar             : [],
      internet          : [],
      mascota           : [],
      climatizacion     : [],
    });

  }


}
