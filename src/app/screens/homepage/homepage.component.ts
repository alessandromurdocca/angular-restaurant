import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { AboutComponent } from '../about/about.component';
import { FoodMenuComponent } from '../../components/food-menu/food-menu.component';
import { ButtonComponent } from '../../components/button/button.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ApiService } from '../../services/api.service';
import { Observable, Subscription } from 'rxjs';
import { FormComponent } from '../../components/form/form.component';
import { ChefsComponent } from '../../components/chefs/chefs.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import {
  faUserTie,
  faUtensils,
  faCartPlus,
  faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import {
  MenuElement,
  RestaurantServices,
} from '../../interfaces/restaurant';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    HeroComponent,
    ServiceCardComponent,
    AboutComponent,
    FoodMenuComponent,
    ButtonComponent,
    AboutUsComponent,
    FormComponent,
    ChefsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  getData$: Subscription | null = null;

  menuElements: MenuElement[] = [];

  ngOnInit(): void {
    this.getData$ = this.apiService
      .getApi(
        'https://private-anon-e083a556a9-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu?category=Pizza&orderBy=rank'
      )
      .subscribe((data: []) => {
        console.log(data, "api")
        this.menuElements = data;
      });
  }
  services: RestaurantServices[] = [
    {
      serviceTitle: 'Master Chefs',
      serviceSubtitle:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: faUserTie,
    },
    {
      serviceTitle: 'Master Chefs',
      serviceSubtitle:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: faUtensils,
    },
    {
      serviceTitle: 'Master Chefs',
      serviceSubtitle:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: faCartPlus,
    },
    {
      serviceTitle: 'Master Chefs',
      serviceSubtitle:
        'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam',
      icon: faHeadset,
    },
  ];
}
