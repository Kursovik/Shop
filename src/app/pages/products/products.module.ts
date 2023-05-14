import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: ProductsComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
    ]),
  ],
})
export class ProductsModule {}
