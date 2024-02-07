import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent],
  templateUrl: './landing.component.html',
  styles: ``
})
export default class LandingComponent {

}
