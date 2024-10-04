import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
  faHamburger,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { FoodMenuElementComponent } from '../food-menu-element/food-menu-element.component';

@Component({
  selector: 'app-food-menu',
  standalone: true,
  imports: [FoodMenuElementComponent, CommonModule, FontAwesomeModule],
  templateUrl: './food-menu.component.html',
})
export class FoodMenuComponent implements OnInit, OnChanges {
  @Input() elements: any[] = [];
  constructor() {
    console.log(this.elements, 'menuelements');
  }

  menuElements: any[] = [];

  searchbar = new Subject<string>();

  ngOnChanges(changes: any) {
    if (changes['elements']) {
      console.log('menuElements in ngOnChanges:', this.elements);
    }
    this.searchbar.subscribe((value) => this.filterElement(value));
  }

  ngOnInit() {
    console.log('menuElements in ngOnInit:', this.elements);
    this.menuElements = this.elements;
  }

  categoryItems = [
    { title: 'Popular', subtitle: 'Breakfast', icon: faCoffee },
    { title: 'Special', subtitle: 'Launch', icon: faHamburger },
    { title: 'Lovely', subtitle: 'Dinner', icon: faUtensils },
  ];
  tabOpen = this.categoryItems[0].title;

  changeTab(category: any) {
    this.tabOpen = category;
  }

  changeText(event: Event) {
    const text = (event.target as HTMLInputElement).value;
    this.searchbar.next(text);
  }

  filterElement(value: string) {
    const newArray = this.elements.filter((element: any) =>
      element.name.toLowerCase().includes(value.toLowerCase())
    );
    this.menuElements = newArray;
    console.log(value, 'value');
    console.log(newArray);
  }
}
