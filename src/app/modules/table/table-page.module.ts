import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';
import { TableComponent } from './table/table.component';
import {TableModule} from "primeng/table"


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ],
  providers: [ProductService]
})
export class TablePageModule { }
