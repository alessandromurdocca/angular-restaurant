import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimatedNumberService {
  private animatedNumbers: Map<string, BehaviorSubject<number>> = new Map();

  constructor() {}

  // Metodo per ottenere l'Observable del numero animato associato a un ID
  getAnimatedNumber(id: string): Observable<number> {
    if (!this.animatedNumbers.has(id)) {
      this.animatedNumbers.set(id, new BehaviorSubject<number>(0));
    }
    return this.animatedNumbers.get(id)!.asObservable();
  }

  // Metodo per avviare l'animazione di un numero
  animateNumber(id: string, target: number, duration: number): void {
    if (!this.animatedNumbers.has(id)) {
      this.animatedNumbers.set(id, new BehaviorSubject<number>(0));
    }

    let currentNumber = 0;
    const intervalTime = 10; // Intervallo di aggiornamento (10 ms)
    const step = target / (duration / intervalTime); // Calcola il passo
    const animatedNumber = this.animatedNumbers.get(id)!;

    const interval = setInterval(() => {
      currentNumber += step;
      if (currentNumber >= target) {
        animatedNumber.next(target);
        clearInterval(interval);
      } else {
        animatedNumber.next(currentNumber);
      }
    }, intervalTime);
  }
}
