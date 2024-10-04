import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { NavbarItem } from '../../interfaces/header';
import { ButtonComponent } from '../button/button.component';
import { NavbarSingleItemComponent } from '../navbar-single-item/navbar-single-item.component';
import { EventEmitter } from 'node:stream';
import { NavigateButtonComponent } from "../navigate-button/navigate-button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterModule,
    CommonModule,
    NavbarSingleItemComponent,
    FontAwesomeModule,
    NavigateButtonComponent
],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() siteTitle: string = '';
  //@Output() callback: EventEmitter = new EventEmitter();

  routes!: NavbarItem[];
  faUtensil = faUtensils;
  faHamburgerMenu = faBars;
  isScrolled: boolean = false;
  hamburgerMenuIsOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('oninit');
    console.log(this.router.config, 'router');
    this.getRoutes(this.router.config);
    this.onWindowScroll();
  }

  getRoutes(routes: Routes): void {
    let tmpArr: any[] = [];
    for (let item of routes) {
      if(item.path !== "booking")
      tmpArr.push({
        path: item.path,
        label: item.title,
      });
    }
    this.routes = tmpArr;
  }

  openHamburgerMenu(): void {
    console.log('entro nella funzione');
    this.hamburgerMenuIsOpen = !this.hamburgerMenuIsOpen;
    console.log(this.hamburgerMenuIsOpen);
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollY, 'scroll');
    if (scrollY > 120) {
      // Soglia, puoi modificarla
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
}
