import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart/chart.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [ChartComponent],
  imports: [CommonModule, ChartRoutingModule, ChartModule],
})
export class ChartPageModule {}
