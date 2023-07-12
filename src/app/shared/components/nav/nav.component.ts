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
      {label: 'Inicio', icon: PrimeIcons.HOME, routerLink: "/"},
      {label: 'Buscar Favor', icon: PrimeIcons.SEARCH, routerLink: "filtros"},
      {label: 'Publicar Favor', icon: PrimeIcons.SEND, routerLink: "insertar-favor"},
      {label: 'Iniciar Sesión', icon: PrimeIcons.USER, routerLink: "auth/login"},
      {label: 'Cerrar Sesión', icon: PrimeIcons.USER, command: ()=>{this.logout()}}
    ];
  }

  private logout() {
    this._authService.logout();
    this.router.navigate(['/'])
  }
}
