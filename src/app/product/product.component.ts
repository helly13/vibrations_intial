import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router,ActivatedRoute } from "@angular/router";
import { ProductService } from "../services/product.service";
import { Product } from "../classes/product";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Product_List:Product[];
  interesed_flag:boolean=false;

  constructor(private product_ser:ProductService,private _router:Router) { }

  ngOnInit(): void {

    this.product_ser.getAllProducts().subscribe(
      (data:any[])=>
      {
        this.Product_List=data;
        console.log(this.Product_List);
      }
    );
  }

  // onClick()
  // {
  //   this.interesed_flag=true;
  //   this._router.navigate["/product"]
  // }
}
