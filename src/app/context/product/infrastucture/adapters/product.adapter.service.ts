import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../domain/models/product.model';
import { ProductRepository } from '../../domain/ports/out/product.repository';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient para hacer llamadas HTTP

@Injectable({
  providedIn: 'root',
})
export class ProductAdapterService implements ProductRepository {
  private apiUrl = 'http://localhost:8080/api/v1/products'; // URL de tu API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  
  findById(id: number): Observable<ProductModel | null> {
    return this.http.get<ProductModel>(`${this.apiUrl}/${id}`); // Realiza una petición GET a la API
  }

  findAll(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.apiUrl); // Realiza una petición GET a la API
  }
}
