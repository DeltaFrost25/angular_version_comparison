import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ChangeDetectionStrategy, Component, Signal, inject, signal } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    ButtonModule,
    RatingModule,
    TagModule,
  ],
  providers: [ProductService],
  template: ` <p-table
    [value]="products()"
    [tableStyle]="{ 'min-width': '60rem' }"
  >
    <ng-template pTemplate="caption">
      <div class="flex align-items-center justify-content-between">
        Products
        <p-button icon="pi pi-refresh"></p-button>
      </div>
    </ng-template>
    <ng-template pTemplate="header">
      <tr>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Category</th>
        <th>Reviews</th>
        <th>Status</th>
      </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
      <tr>
        <td>{{ product.name }}</td>
        <td>
          <img
            [src]="
              'https://primefaces.org/cdn/primeng/images/demo/product/' +
              product.image
            "
            [alt]="product.name"
            width="100"
            class="shadow-4"
          />
        </td>
        <td>{{ product.price | currency : 'USD' }}</td>
        <td>{{ product.category }}</td>
        <td>
          <p-rating
            [ngModel]="product.rating"
            [readonly]="true"
            [cancel]="false"
          ></p-rating>
        </td>
        <td>
          <p-tag
            [value]="product.inventoryStatus"
            [severity]="getSeverity(product.inventoryStatus)"
          ></p-tag>
        </td>
      </tr>
    </ng-template>
    <ng-template pTemplate="summary">
      <div class="flex align-items-center justify-content-between">
        In total there are {{ products() ? products().length : 0 }} products.
      </div>
    </ng-template>
  </p-table>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePage {
  products = signal<any>([]);

  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products.set(data);
    });
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
