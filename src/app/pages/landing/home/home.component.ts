import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { SeccionproductsComponent } from './seccion-products/seccionprod.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { DesignersComponent } from './seccion-designers/designers.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,BannerComponent,SeccionproductsComponent,ContactusComponent,TestimonialsComponent,DesignersComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
