import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Favor} from "../../models/favor.models";
import {FavorSwappService} from "../../services/favor-swapp.service";

@Component({
  selector: 'app-insertar-favor',
  templateUrl: './insertar-favor.component.html',
  styleUrls: ['./insertar-favor.component.css']
})
export class InsertarFavorComponent implements OnInit{

  public pruebasDesarrolo: boolean;
  public formFavor!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private favorService: FavorSwappService,
  ) {
    this.pruebasDesarrolo = true;
  }
  ngOnInit(): void {
    this.obtenerFormulario();
  }

  public obtenerFormulario(){
    this.formFavor = this.formBuilder.group({
      id                : [0, []],
      foto              : ["", [Validators.required]],
      fumar             : [false, []],
      internet          : [false, []],
      mascota           : [false, []],
      climatizacion     : [false, []],
      adaptacionMovilidadReducida      : [false, []]
    });

  }

  public validarFavor(){
    let favor: Favor = this.formFavor.value;
    this.guardaFavor(favor);
  }

  public guardaFavor(favor: Favor) {
    // TODO
    console.log(favor);
    this.favorService.guardarFavor(favor).subscribe({
      next : () => {},
      error : () => {}
    });
  }
}
