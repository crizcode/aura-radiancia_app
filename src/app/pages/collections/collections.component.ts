import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../context/product/domain/models/product.model';
import { ProductAdapterService } from '../../context/product/infrastucture/adapters/product.adapter.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collections.component.html'
})
export class CollectionsComponent implements OnInit {
  public products: ProductModel[] = [];
  public error: string = '';

  constructor(private productService: ProductAdapterService, private router: Router) {}

  ngOnInit() {
    this.getAllProducts();
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
  public counter: number = 1;

  increaseBy(value: number) {
    this.counter = this.counter + value < 1 ? 1 : this.counter + value;
  }

   // navegar a detail

   showProductDetail(productId: number) {
    this.router.navigate(['/detail', productId]);
  }

}