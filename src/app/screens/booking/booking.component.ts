import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
})
export class BookingComponent {
  form = {
    name: '',
    surname: '',
    people: 1,
    anyRequest: '',
  };

  onSubmitForm() {
    console.log(this.form);
  }
}
