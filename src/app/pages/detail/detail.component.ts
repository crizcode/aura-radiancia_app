import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../../context/product/domain/models/product.model';
import { ProductAdapterService } from '../../context/product/infrastucture/adapters/product.adapter.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
})
export class DetailComponent implements OnInit {
  productId: number | null = null;
  productDetails: ProductModel | null = null;
  public counter: number = 1;
  products: ProductModel[] = [];
  public error: string = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductAdapterService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['productId'];
      this.getProductDetails(this.productId);
      this.getAllProducts();
    });
  }

  getProductDetails(productId: number) {
    this.productService.findById(productId).subscribe(
      (data: ProductModel | null) => {
        if (data !== null) {
          this.productDetails = data;
        } else {
          console.error('No se encontró ningún producto con el ID especificado.');
        }
      },
      error => {
        console.error('Error obteniendo detalles del producto:', error);
      }
    );
  }

  increaseBy(value: number) {
    this.counter = this.counter + value < 1 ? 1 : this.counter + value;
  }

  getAllProducts() {
    this.productService.findAll().subscribe(
      (products: ProductModel[]) => {
        this.products = products;
      },
      (error) => {
        this.error = 'Error al cargar los productos';
      }
    );
  }
  
  addToCart(product: ProductModel, counter: number) {
    this.cartService.addToCart(product, counter);
  }
}
