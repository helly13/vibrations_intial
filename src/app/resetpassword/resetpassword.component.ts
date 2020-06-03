import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";


export class reset {
  constructor(
    public otp: string,
    public pass: string,
    public pass1: string
  ) {}
}

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  OTP:string;
  Password:string;
  Confirm_Password:string;
  constructor(private _router:Router,private log_ser:LoginService,private localst:LocalStorageService,private sessionst:SessionStorageService) { }

  ngOnInit(): void {

  }

  onResetPassword()
  {
    this.log_ser.onResetPassword({"otp":this.OTP,"pass":this.Password,"pass1":this.Confirm_Password}).subscribe(
      (data:any)=>
      {
        console.log(data);
        if(data=="INVALID DETAILS")
        {
          alert("Invalid OTP.Please Enter correct OTP ")
          // console.log("invalid");
        }
        else{
          this._router.navigate(['login']);
        }
      }
    );
  }
}
