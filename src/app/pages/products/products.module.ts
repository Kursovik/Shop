import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ProductsApiService } from './services/products-api.service';
import { ProductsLogicService } from './services/products-logic.service';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
    ]),
    CardModule,
  ],
  providers: [ProductsApiService, ProductsLogicService],
})
export class ProductsModule {}
