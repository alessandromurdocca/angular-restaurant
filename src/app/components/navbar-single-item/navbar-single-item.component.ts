import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarItem } from '../../interfaces/header';

@Component({
  selector: 'app-navbar-single-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar-single-item.component.html',
  styleUrl: './navbar-single-item.component.css',
})
export class NavbarSingleItemComponent {
  @Input() route: NavbarItem = {
    path: '',
    label: '',
  };

  constructor() {
    console.log(this.route, 'route');
  }
}
