import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { FoodMenuComponent } from "../../components/food-menu/food-menu.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeroComponent, FoodMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
