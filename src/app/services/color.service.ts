import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
  defaultColor: string = '#008000';
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
}
