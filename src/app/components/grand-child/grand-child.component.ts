import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
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

          @if (!hideCounter()) {
          <!-- <button>Clicks {{ clicksDone }}</button> -->
          <!-- <button>
            Clicks {{ clicksDone$ | async }}
          </button> -->
          <button>Clicks {{ clicksDone() }}</button>
          }
        </p>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  hideCounter = input(false);
  colorService = inject(ColorService);
  /* get clicksDone() {
    return this.colorService.clicksDone;
  } */
  // clicksDone$ = this.colorService.clicksDone$;
clicksDone = this.colorService.clicksDone;
  getRandomColor = this.colorService.getRandomColor;
  getColor = () => {
    return this.getRandomColor();
  };
}
