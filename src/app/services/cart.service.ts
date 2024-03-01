import { EventEmitter, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ProductModel } from '../context/product/domain/models/product.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: { product: ProductModel, quantity: number }[] = [];
  cartChanged: EventEmitter<void> = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadCartItems();
  }

  addToCart(product: ProductModel, quantity: number) {
    // Verifica si el producto ya está en el carrito
    const existingItemIndex = this.cartItems.findIndex(item => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      this.cartItems[existingItemIndex].quantity += quantity;
    } else {
      // Si el producto no está en el carrito, agrega un nuevo elemento
      this.cartItems.push({ product, quantity });
    }

    // Guarda los elementos del carrito en el almacenamiento local
    this.saveCartItems();
    // Emitir evento para notificar al componente
    this.cartChanged.emit();
  }

  removeFromCart(item: { product: ProductModel, quantity: number }) {
    // Encuentra el índice del item en el array cartItems
    const index = this.cartItems.findIndex(cartItem => cartItem === item);
    if (index !== -1) {
      // Elimina el item del array cartItems
      this.cartItems.splice(index, 1);
      // Guarda los elementos del carrito actualizados en el almacenamiento local
      this.saveCartItems();
      // Emitir evento para notificar al componente
      this.cartChanged.emit();
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  private saveCartItems() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }

  private loadCartItems() {
    if (isPlatformBrowser(this.platformId)) {
      const cartItemsString = localStorage.getItem('cartItems');
      if (cartItemsString) {
        this.cartItems = JSON.parse(cartItemsString);
      }
    }
  }

  adjustQuantity(item: { product: ProductModel, quantity: number }, action: string) {
    // Lógica para ajustar la cantidad
    if (action === 'increase') {
      item.quantity++;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity--;
    }
    // Puedes agregar lógica adicional aquí si es necesario
    // Actualiza el almacenamiento local después de ajustar la cantidad si es necesario
    this.saveCartItems();
    // Emitir evento para notificar al componente
    this.cartChanged.emit();
  }
}
