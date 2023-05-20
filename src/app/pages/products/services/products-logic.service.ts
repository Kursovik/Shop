import { Injectable } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { Products } from '../types/products';

@Injectable()
export class ProductsLogicService {
  constructor(private readonly productsApiService: ProductsApiService) {}

  public getProducts(): Products[] {
    return this.productsApiService.getProducts();
  }
}
