import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppingcart',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './shoppingcart.component.html',
})

export  class ShoppingcartComponent  implements OnInit, OnDestroy {
  @Output() closeCartEvent = new EventEmitter<void>();
  cartItems: { product: any, quantity: number }[] = [];
  totalPrecio: number = 0;
  private cartSubscription?: Subscription;
  isCartEmpty: boolean = false;

  constructor(private cartService: CartService, private router: Router, private cdr: ChangeDetectorRef) { 
    
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calcularTotalPrecio();
  
    // Suscribirse al evento de cambio en el carrito
    this.cartSubscription = this.cartService.cartChanged.subscribe(() => {
      // Actualizar la lista de items y recalcular el precio total
      this.cartItems = this.cartService.getCartItems();
      this.calcularTotalPrecio();
      this.checkCartEmpty();
      this.cdr.detectChanges();
    });
    this.checkCartEmpty();
    
  }

  ngOnDestroy() {
    // Desuscribirse para evitar fugas de memoria
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  closeCart() {
    this.closeCartEvent.emit();
  }

  adjustQuantity(item: { product: any, quantity: number }, action: string) {
    this.cartService.adjustQuantity(item, action);
  }

  eliminarItem(item: any) {
    this.cartService.removeFromCart(item);
    this.checkCartEmpty(); 
  }

  limitQuantity(item: any) {
    // Limitar la cantidad máxima a 99
    if (item.quantity > 99) {
      item.quantity = 99;
    }
  }

  // Función para calcular el precio total
  calcularTotalPrecio() {
    this.totalPrecio = 0;
    
    // Iterar sobre cada item en el carrito y calcular el precio total
    this.cartItems.forEach(item => {
      this.totalPrecio += item.product.precio * item.quantity;
    });
  }


   // Función para verificar si el carrito está vacío
   checkCartEmpty() {
    this.isCartEmpty = this.cartItems.length === 0;
  }

  
}