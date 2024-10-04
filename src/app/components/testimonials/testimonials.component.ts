import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';
import { Testimonal } from '../../interfaces/restaurant';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LineWithTextComponent } from '../line-with-text/line-with-text.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, LineWithTextComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements AfterViewInit, OnDestroy {
  intervalId: any;
  actualIndex: number = 0; // Indice della prima recensione visibile
  currentReviews: Testimonal[] = [];
  quoteIcon = faQuoteLeft;

  reviews: Testimonal[] = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Mario Rossi',
      reviewerRole: 'Cameriere',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Giuseppe Verdi',
      reviewerRole: 'Chef',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Luca Bianchi',
      reviewerRole: 'Sommelier',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Laura Neri',
      reviewerRole: 'Receptionist',
    },
    {
      id: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Franco Esposito',
      reviewerRole: 'Manager',
    },
    {
      id: 6,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      imageUrl: 'https://picsum.photos/50',
      reviewerName: 'Silvia Rinaldi',
      reviewerRole: 'Chef',
    },
  ];

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.updateCurrentReviews();
    this.startSlider();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  startSlider() {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }, 3000); 
    });
  }

  nextSlide() {
    this.actualIndex = (this.actualIndex + 1) % this.reviews.length;
    this.updateCurrentReviews();
  }

  updateCurrentReviews() {
    this.currentReviews = this.reviews.slice(this.actualIndex, this.actualIndex + 3);

    if (this.currentReviews.length < 3) {
      this.currentReviews = this.currentReviews.concat(this.reviews.slice(0, 3 - this.currentReviews.length));
    }
  }

  goToSlide(index: number) {
    this.actualIndex = index;
    this.updateCurrentReviews();
    this.resetInterval();
  }

  resetInterval() {
    this.clearInterval();
    this.startSlider();
  }

  clearInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  isDotActive(index: number): boolean {
    return this.actualIndex === index
  }
}
