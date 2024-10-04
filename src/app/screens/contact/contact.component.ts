import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FormComponent } from "../../components/form/form.component";
import { LineWithTextComponent } from '../../components/line-with-text/line-with-text.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeroComponent, LineWithTextComponent, FontAwesomeModule, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  mailIcon = faEnvelopeOpen;
  pageTitle: string = 'Contact Us';
  contacts = [
    {
      contactTitle: 'Booking',
      contact: 'book@example.com',
    },
    {
      contactTitle: 'General',
      contact: 'info@example.com',
    },
    {
      contactTitle: 'Technical',
      contact: 'tech@example.com',
    },
  ];
}
