import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HeaderComponent,
    HeroComponent,
    ServiceCardComponent,
    AboutUsComponent,
    FoodMenuComponent,
    ButtonComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-resturant';

  
  
}
