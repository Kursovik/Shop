import { Component, OnInit, Optional } from '@angular/core';
import { ProductsLogicService } from '../services/products-logic.service';
import { Products } from '../types/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public products: Products[] = [];

  constructor(private productsLogicService: ProductsLogicService) {}
  public ngOnInit(): void {
    this.products = this.productsLogicService.getProducts();
  }
}
