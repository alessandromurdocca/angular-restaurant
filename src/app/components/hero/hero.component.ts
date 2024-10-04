import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent, CommonModule, BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() isHomepage: boolean = false;
  @Input() heroTitle: string | undefined = undefined;
}
