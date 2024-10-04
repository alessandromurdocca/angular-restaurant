import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-menu-element',
  standalone: true,
  imports: [],
  templateUrl: './food-menu-element.component.html',
})
export class FoodMenuElementComponent {
  @Input() imageSrc?: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() price: number = 0;
}
