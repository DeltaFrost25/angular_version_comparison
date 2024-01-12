import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  color: string = '';

  constructor() {
    this.getRandomColor();
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.color = color;
  }
}
