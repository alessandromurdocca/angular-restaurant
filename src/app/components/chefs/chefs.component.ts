import { Component } from '@angular/core';
import { Chef } from '../../interfaces/restaurant';
import { CommonModule } from '@angular/common';
import { LineWithTextComponent } from '../line-with-text/line-with-text.component';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CommonModule, LineWithTextComponent],
  templateUrl: './chefs.component.html',
  styleUrl: './chefs.component.css',
})
export class ChefsComponent {
  showElementIndex: number | undefined;
  allChefs: Chef[] = [
    {
      chefImage: 'https://picsum.photos/200',
      name: 'Mario Rossi',
      role: 'Capo Cucina',
    },
    {
      chefImage: 'https://picsum.photos/200',
      name: 'Pippo Verdi',
      role: 'Chef',
    },
    {
      chefImage: 'https://picsum.photos/200',
      name: 'Giorgia Blu',
      role: 'Chef',
    },
    {
      chefImage: 'https://picsum.photos/200',
      name: 'Alessia Grigi',
      role: 'Assistente chef',
    },
  ];

  onMouseHover(element: number) {
    this.showElementIndex = element;
  }

  onMouseLeave() {
    this.showElementIndex = undefined;
  }
}
