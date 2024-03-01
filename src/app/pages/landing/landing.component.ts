import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent,HeaderComponent],
  templateUrl: './landing.component.html',
  styles: ``
})
export default class LandingComponent {

}
