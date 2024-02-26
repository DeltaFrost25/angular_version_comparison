import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable()
export class ColorService {
  defaultColor: string = '#008000';
  //clicksDone = 0;
  /* clicksDone = new BehaviorSubject(0);
  clicksDone$ = this.clicksDone.pipe(map((clicks) => `${clicks} done`)); */
  clicksDone = signal(0);
  getRandomColor: () => string;

  constructor() {
    this.defaultColor = '#008000';
    this.getRandomColor = () => {
      if (this.defaultColor) {
        return this.defaultColor;
      }
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
  }

  incrementCounter() {
    if (this.defaultColor) this.defaultColor = '';
    // this.clicksDone++;
    // this.clicksDone.next(this.clicksDone.value + 1);
    this.clicksDone.update((clicks) => ++clicks);
  }
}
