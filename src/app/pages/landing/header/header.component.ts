import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  @Output() openCartEvent = new EventEmitter<void>();

  openCart() {
    this.openCartEvent.emit();
  }

}