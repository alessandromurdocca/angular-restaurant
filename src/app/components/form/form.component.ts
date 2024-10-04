import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { LineWithTextComponent } from '../line-with-text/line-with-text.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ButtonComponent,
    LineWithTextComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Input() typeForm: 'image' | 'map' | null = null;
  formType: 'image' | 'map' | null = null;

  formRequest = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    date: new FormControl(''),
    people: new FormControl('', [
      Validators.minLength(1),
      Validators.maxLength(20),
      Validators.required,
    ]),
    request: new FormControl('', Validators.required),
  });

  constructor() {
    this.formType = this.typeForm;
  }

  onSubmitForm() {
    console.log(this.formRequest.value, 'form');
  }
}
