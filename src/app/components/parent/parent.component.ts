import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  template: ` <div
    *ngIf="getColor() as color"
    class=" w-100 p-3 rounded"
    [ngStyle]="{ 'background-color': color, border: '2px solid black' }"
  >
    <div class="d-flex justify-content-center mb-3">
      <p class="m-0" style="color: white">
        Parent Component Color: {{ color }}
      </p>
      <button (click)="incrementCounter()">Increment</button>
    </div>

    <div class="row">
      <div class="col">
        <app-child [counterOption]="'HIDE_ALL_COUNTER'" />
      </div>
      <div class="col">
        <app-child [counterOption]="'HIDE_ONE_COUNTER'" />
      </div>
    </div>
  </div>`,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  colorService = inject(ColorService);
  getColor = inject(ColorService).getRandomColor;

  incrementCounter() {
    this.colorService.incrementCounter();
  }
}
