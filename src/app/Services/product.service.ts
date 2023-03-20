import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://fakestoreapi.com/products";

  constructor(private httpClient : HttpClient) { }

  
  getProducts(price?: number) {
    let url = this.apiUrl;
    if (price) {
      url += `?price_lte=${price}`;
    }
    return this.httpClient.get(url);
  }
}
