import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

    public items: MenuItem[];
    public activeItem: MenuItem;

  constructor() {
    this.items = [];
    this.activeItem = {};
  }






  ngOnInit() {
    this.items = [
      {label: 'Inicio', icon: PrimeIcons.HOME, routerLink: "/"},
      {label: 'Publicar Favor', icon: PrimeIcons.SEND, routerLink: "insertar-favor"},
      {label: 'Buscar Favor', icon: PrimeIcons.SEARCH, routerLink: "filtros"},
      {label: 'Login', icon: PrimeIcons.USER}
    ];
  }

}
