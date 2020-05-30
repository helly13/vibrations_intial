import { Injectable } from '@angular/core';


import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Product } from "../classes/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private product_url="http://localhost:3000/show_Products/"
  private adding_product_url="http://localhost:3000/adding_Products/";

  constructor(private _http:HttpClient) { }

  getAllProducts()
  {
    return this._http.get(this.product_url);
  }

  addProducts(item:any)
  {
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.adding_product_url,body,{headers:_head});
  }
}
