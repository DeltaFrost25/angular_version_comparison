import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { ColorService } from '../../services/color.service';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, GrandChildComponent],
  template: `<div
    *ngIf="getColor() as color"
    class=" w-100 p-3 rounded"
    [ngStyle]="{ 'background-color': color, border: '2px solid black' }"
  >
    <div class="d-flex justify-content-center mb-3">
      <p class="m-0" style="color: white">Child Component Color: {{ color }}</p>
    </div>
    <div class="row">
      <div class="col">
        <app-grand-child
          [hideCounter]="omitAllCounters() || omitOneCounter()"
        />
      </div>
      <div class="col">
        <app-grand-child [hideCounter]="omitAllCounters()" />
      </div>
    </div>
  </div>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  counterOption = input.required<
    'SHOW_ALL' | 'HIDE_ONE_COUNTER' | 'HIDE_ALL_COUNTER'
  >();
  omitOneCounter = computed(() => this.counterOption() === 'HIDE_ONE_COUNTER');
  omitAllCounters = computed(() => this.counterOption() === 'HIDE_ALL_COUNTER');
  getColor = inject(ColorService).getRandomColor;
}
