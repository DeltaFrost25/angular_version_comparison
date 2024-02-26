import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentComponent } from '../../components/parent/parent.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [CommonModule, ParentComponent],
  template: `
    <div class="w-100 p-5">
      <app-parent></app-parent>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeDetectionPage {}
