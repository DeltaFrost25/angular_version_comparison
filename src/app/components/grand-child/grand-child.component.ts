import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="getColor() as color"
      class=" w-100 p-3 rounded"
      [ngStyle]="{ 'background-color': color, border: '2px solid black' }"
    >
      <div class="d-flex justify-content-center">
        <p class="m-0" style="color: white">
          Grand Child Component Color: {{ color }}
          <button (click)="removeDefaultColor()">Click</button>
        </p>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  colorService = inject(ColorService);
  getRandomColor = inject(ColorService).getRandomColor;
  getColor = () => {
    console.log('Detection');
    return this.getRandomColor();
  };

  removeDefaultColor() {
    this.colorService.defaultColor = '';
  }
}
