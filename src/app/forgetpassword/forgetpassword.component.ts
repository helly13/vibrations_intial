import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { EvntService } from "../services/evnt.service";
import { Login1Service } from "../services/login1.service";

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private sessionst:SessionStorageService,private _router:Router,private log_ser:Login1Service) { }

  Email_id:string;
  ngOnInit(): void {


  }

  onGetPassword()
  {
    this.log_ser.onForgetPassword({"username":this.Email_id}).subscribe(
      (data:any)=>{
        // console.log(data);
        if(data)
        {
          this._router.navigate(['resetpassword']);
        }
      }
    );

  }


}
