import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule],
  template: ` <div
    class=" w-100 p-3 rounded"
    [ngStyle]="{ 'background-color': color }"
  >
    <div class="d-flex justify-content-center">
      <p class="m-0" style="background-color: aliceblue;">
        Parent Component Color: {{ color }}
      </p>
    </div>
  </div>`,
  styles: `
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  color = inject(ColorService).color;
}
