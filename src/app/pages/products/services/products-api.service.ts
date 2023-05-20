import { Injectable } from '@angular/core';
import { Products } from '../types/products';

@Injectable()
export class ProductsApiService {
  constructor() {}

  public getProducts(): Products[] {
    return [
      {
        id: 1,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        article: 2343344,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 2,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        article: 2343344,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 3,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        article: 2343344,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 4,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        article: 2343344,
        image: 'https://via.placeholder.com/150x150',
      },
      {
        id: 5,
        name: 'Product 1',
        description: 'Product 1 description',
        price: 100,
        article: 2343344,
        image: 'https://via.placeholder.com/150x150',
      },
    ];
  }
}
