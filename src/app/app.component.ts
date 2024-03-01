import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './pages/landing/footer/footer.component';
import { HeaderComponent } from './pages/landing/header/header.component';
import { AddcartComponent } from './pages/addcart/addcart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,AddcartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aura-radiancia_app';

  constructor(private router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url.startsWith('/login') || this.router.url.startsWith('/dashboard');
  }

  isDashboardRoute(): boolean {
    return this.router.url.startsWith('/dashboard');
  }

  isCartOpen: boolean = false;

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }
}