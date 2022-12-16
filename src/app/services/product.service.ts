import { Product } from '../models/products';

export class ProductService {
  public getProducts(): Product[] {
    let products: Product[] = [
      new Product(1, 'https://via.placeholder.com/150/92c95'),
      new Product(1, 'https://via.placeholder.com/150/92c95'),
      new Product(1, 'https://via.placeholder.com/150/92c95'),
    ];
    return products;
  }
}
