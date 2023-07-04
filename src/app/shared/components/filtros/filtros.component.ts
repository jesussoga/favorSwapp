import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit{

  public fumar: boolean;
  public mascota: boolean;
  public provincias: [];

  constructor() {
    this.fumar = false;
    this.mascota = false;
    this.provincias = [];
  }

  ngOnInit(): void {

  }
}
