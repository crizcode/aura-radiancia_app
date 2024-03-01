import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';


@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent,TitleComponent],
  templateUrl: './producto.component.html',
  styles: ``
})
export default class productoComponent {

}
