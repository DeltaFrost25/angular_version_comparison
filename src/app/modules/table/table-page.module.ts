import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { TableComponent } from './table/table.component';
import { TableModule } from 'primeng/table';
import { TablePageRoutingModule } from './table-page-routing.module';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    TablePageRoutingModule,
    ButtonModule,
    RatingModule,
    TagModule,
  ],
  providers: [ProductService],
})
export class TablePageModule {}
