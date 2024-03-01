import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';


@Component({
  selector:'app-resumen',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush, //mod por defecto
  template:   `
          <app-title title="Resumen" />
          `
          
})
export default class ResumenComponent {
    

}
