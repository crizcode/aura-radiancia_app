import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';

export interface ProductRepository {
  findById(id: number): Observable<ProductModel | null>;
  findAll(): Observable<ProductModel[]>;
}