import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../classes/product';
import { SessionStorageService } from 'angular-web-storage';

export class product {
  constructor(public email: string, public Product_id: string) {}
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Product_List: Product[];
  Email_id: string;
  interesed_flag: any;
  login_flag:boolean;

  constructor(
    private product_ser: ProductService,
    private _router: Router,
    private sessionst: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.Email_id = this.sessionst.get('email_id');
    if (this.Email_id) {
      this.login_flag = true;
    } else {
      this.login_flag = false;
    }

    this.product_ser.getAllProducts().subscribe((data: any[]) => {
      this.Product_List = data;
      console.log(this.Product_List);
    });
  }

  onClick(item) {
    // this.interesed_flag=true;
    // this._router.navigate["/product"]
    // console.log(item._id);

    if (this.login_flag) {
      this.product_ser
        .addProducts(new product(this.Email_id, item._id))
        .subscribe((data: any) => {
          console.log(data);
          if (data == '0') {
            alert('Thank you for showing your Interest');
            this.interesed_flag = 'Interested';
          } else if (data == '1') {
            alert('You have already shown your interest');
          }
        });
    }
    else
    {
      alert('Seems like your are not logged in.Please Login First');
      this._router.navigate(['login']);
    }
  }
}
