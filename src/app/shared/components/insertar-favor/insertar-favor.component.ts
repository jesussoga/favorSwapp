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
    this.formFavor = this.formBuilder.group({
      foto           : ["", [Validators.required]],
      fumar             : [],
      internet          : [],
      mascota           : [],
      climatizacion     : [],
      adapMovRedu      : []
    });

  }


}
