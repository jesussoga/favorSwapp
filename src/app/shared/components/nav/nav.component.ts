import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

    public items: MenuItem[];
    public activeItem: MenuItem;

  constructor(
    private _authService: AuthService,
    private router: Router) {
    this.items = [];
    this.activeItem = {};
  }


  get usuarioActivo(): AuthService {
    return this._authService;
  }

  ngOnInit() {
    this.items = [
      {label: 'Inicio', icon: 'fa-solid fa-home', routerLink: "/"},
      {label: 'Buscar Favor', icon: 'fa-solid fa-search', routerLink: "filtros"},
      {label: 'Publicar Favor', icon: 'fa-regular fa-paper-plane', routerLink: "insertar-favor"},
      {label: 'Configuración', icon: 'fa-solid fa-wrench',items:[
          {
            label: 'Tema',
            icon: 'fa-solid fa-palette',
            items: [
              {
                label: 'Oscuro',
                icon: 'fa-solid fa-moon'
              },
              {
                label: 'Claro',
                icon: 'fa-regular fa-sun'
              },
            ]
          },
          {
            label: 'Idioma',
            icon: 'fa-solid fa-language',
            items: [
              {label: 'Español'},
              {label: 'Inglés'},
            ]
          }
        ]
      },
      {label: 'Iniciar sesión', icon: 'fa-solid fa-user', routerLink: "auth/login"},
      {label: 'Cerrar sesión', icon: 'fa-regular fa-user', command: ()=>{this.logout()}}

    ];
  }

  private logout() {
    this._authService.logout();
    this.router.navigate(['/'])
  }
}
