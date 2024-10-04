import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-images',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-images.component.html',
})
export class GalleryImagesComponent {
  images = [
    {
      id: 1,
      url: 'https://themewagon.github.io/restoran/img/about-1.jpg',
    },
    {
      id: 2,
      url: 'https://themewagon.github.io/restoran/img/about-2.jpg',
    },
    {
      id: 3,
      url: 'https://themewagon.github.io/restoran/img/about-3.jpg',
    },
    {
      id: 4,
      url: 'https://themewagon.github.io/restoran/img/about-4.jpg',
    },
  ];
}
