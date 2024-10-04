import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "../../components/hero/hero.component";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, HeroComponent],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {

}
