import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ListProductUseCase } from '../../domain/ports/in/list.product.use.case';

export class ProductService implements  ListProductUseCase {
    
    constructor(

        private listProductUseCase: ListProductUseCase
      ) {}
  

    listProducts(): Observable<ProductModel[]> {
      return this.listProductUseCase.listProducts();
    }
}