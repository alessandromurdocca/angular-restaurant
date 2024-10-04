import { Routes } from '@angular/router';
import { AboutComponent } from './screens/about/about.component';
import { HomepageComponent } from './screens/homepage/homepage.component';
import { ServiceComponent } from './screens/service/service.component';
import { MenuComponent } from './screens/menu/menu.component';
import { PagesComponent } from './screens/pages/pages.component';
import { ContactComponent } from './screens/contact/contact.component';
import { BookingComponent } from './screens/booking/booking.component';
import { TeamComponent } from './screens/pages/team/team.component';
import { TestimonialComponent } from './screens/pages/testimonial/testimonial.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent, title: 'Home' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'service', component: ServiceComponent, title: 'Service' },
  { path: 'menu', component: MenuComponent, title: 'Menu' },
  {
    path: 'pages',
    component: PagesComponent,
    title: 'Pages',
    children: [
      { path: 'booking', component: BookingComponent, title: 'Booking' },
      { path: 'team', component: TeamComponent, title: 'team' },
      {
        path: 'testimonial',
        component: TestimonialComponent,
        title: 'Testimonial',
      },
    ],
  },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  {
    path: 'booking',
    component: BookingComponent,
    title: 'Booking',
  },
];
