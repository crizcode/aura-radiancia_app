import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {routes } from '../../app.routes'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
    .filter(route => route.path === 'dashboard') // Filtra solo las rutas del dashboard
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'))

  constructor() {
    // Aquí puedes usar este.menuItems para acceder a las rutas filtradas del dashboard
  }
}
