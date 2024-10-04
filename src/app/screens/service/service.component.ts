import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [HeroComponent, ServiceCardComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  services = [
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
