import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { ChefsComponent } from "../../components/chefs/chefs.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent, ChefsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
