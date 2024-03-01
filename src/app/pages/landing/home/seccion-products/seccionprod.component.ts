import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-seccionprod',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './seccionprod.component.html',
  styleUrl: './seccionprod.component.css'
})
export class SeccionproductsComponent {

}


