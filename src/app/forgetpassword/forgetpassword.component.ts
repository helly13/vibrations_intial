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

  constructor(private sessionst:SessionStorageService,private _router:Router,private evnt_ser:EvntService,private log_ser:Login1Service) { }

  Email_id:string;
  ngOnInit(): void {


  }

  onGetPassword()
  {
    var flag=0;
    this.evnt_ser.getStudentDetailsById(this.Email_id).subscribe(
      (data:any)=>{
        console.log(data);
        console.log(data.length);
        if(data.length>0)
        {
          console.log("andr aya");
          flag=1;
        }
        if(flag==1)
        {
             this.log_ser.onForgetPassword({"username":this.Email_id}).subscribe(
            (data:any)=>{
              console.log(data);
              if(data)
              {
                this._router.navigate(['resetpassword']);
              }
            }
          );
        }
        else{
          alert("No such user found to registered with this Email");
        }
      }
    );


  }


}
