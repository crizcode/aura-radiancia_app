import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  desc_prod = "Vestido verde modelo 1"
  desc_prod2 = "vestido temporada"
  prec_prod = 125.25

  public counter: number = 1;

  increaseBy(value: number) {
    this.counter = this.counter + value < 0 ? 0 : this.counter + value;
  }


}