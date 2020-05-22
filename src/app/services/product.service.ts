import { Injectable } from '@angular/core';


import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Product } from "../classes/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product_url="http://localhost:3000/show_Products/"

  constructor(private _http:HttpClient) { }

  getAllProducts()
  {
    return this._http.get(this.product_url);
  }
}
