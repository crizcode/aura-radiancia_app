import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';


type Grade = 'A'|'B'|'C';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule,TitleComponent],
  templateUrl: './cliente.component.html',
  styles: ``
})

export default class ClienteComponent {
  
  showContent = signal(false);
  grade = signal<Grade>('A');

  frameworks = signal(['Angular','Vue js']);

  frameworks2 = signal([]);


  toggleContent(){
    this.showContent.update( value => !value);
  }

}
