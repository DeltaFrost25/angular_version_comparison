import {
  ChangeDetectionStrategy,
  Component,
  afterRender,
  signal,
} from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-chart-page',
  standalone: true,
  imports: [ChartComponent, SkeletonModule],
  template: `
    <button type="button" (click)="showTable.set(true)">Show Graph</button>

    @defer (when showTable()) {
    <app-chart />
    } @loading (minimum 3s) {
      <p-skeleton height="100vh" styleClass="mb-2" [style]="{'max-height': '336px'}" borderRadius="16px" />
    } @placeholder {
    <div>Graph Place Holder</div>
    }
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartPage {
  showTable = signal(false);
}
