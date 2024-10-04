import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-with-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './line-with-text.component.html',
  styleUrl: './line-with-text.component.css',
})
export class LineWithTextComponent {
  @Input() text: string = '';
  @Input() isOnlyOneSide: boolean | 'left' | 'rigth' = false;
  @Input() elementPosition: 'left' | 'rigth' | 'center' = 'center';

  side: 'left' | 'rigth' | null = null;

  constructor() {
    console.log;
    if (typeof this.isOnlyOneSide === 'boolean') {
      this.side = 'rigth';
    } else {
      this.side = this.isOnlyOneSide;
    }
  }
}
