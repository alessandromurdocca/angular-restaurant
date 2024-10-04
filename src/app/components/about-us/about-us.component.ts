import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from '../button/button.component';
import { GalleryImagesComponent } from '../gallery-images/gallery-images.component';
import { AnimatedNumberService } from '../../services/number-animation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FontAwesomeModule, ButtonComponent, GalleryImagesComponent, CommonModule],
  templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
  experienceAnimatedNumber: number = 0;
  masterchefAnimatedNumber: number = 0;

  constructor(private animatedNumberService: AnimatedNumberService) {}

  ngOnInit(): void {
    // Sottoscrizione all'Observable per il numero "experience"
    this.animatedNumberService.getAnimatedNumber('experience').subscribe(value => {
      this.experienceAnimatedNumber = value;
    });

    // Sottoscrizione all'Observable per il numero "masterchef"
    this.animatedNumberService.getAnimatedNumber('masterchef').subscribe(value => {
      this.masterchefAnimatedNumber = value;
    });

    // Avvia l'animazione per entrambi i numeri
    this.animatedNumberService.animateNumber('experience', 15, 4000); // Da 0 a 15 in 4 secondi
    this.animatedNumberService.animateNumber('masterchef', 50, 4000); // Da 0 a 50 in 4 secondi
  }
}
