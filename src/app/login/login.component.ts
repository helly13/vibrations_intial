import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from "../services/login.service";
import { Router } from '@angular/router';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  flag:boolean=true;
  Email_id:string;
  Student_type:string;
  Password:string="";
  invalid:string="invalid";


  constructor(private _router:Router,private log_ser:LoginService,private localst:LocalStorageService,private sessionst:SessionStorageService) { }


  onclicklogin()
  {
    console.log(this.Email_id,this.Password);

    this.log_ser.getLoggedin({"username":this.Email_id,"pass":this.Password}).subscribe(
      (data:any)=>
      {
          if(data)
          {
              // console.log(data);
              // console.log(data.stu_status);
              // this.localst.store('email_id',this.Email_id);
              // this.localst.store('student_type',data.stu_status);
              this.sessionst.set('email_id',this.Email_id);
              this.sessionst.set('student_type',data.stu_status);
              // localStorage.setItem('email_id',this.Email_id);
              // localStorage.setItem('student_type',data.stu_status);
              this._router.navigateByUrl('header', { skipLocationChange: true }).then(() => {
                this._router.navigate(['']);
            });
              // this._router.navigate(['']);
          }
          else
          {
            // alert('User does not exist');
            alert('Email_id or Password Incorrect');
          }

      }
    );

  }

  onClickSignup()
  {
    this._router.navigate(['sign_up']);
  }

onclickforget()
{
  this._router.navigate(['forgetpassword']);

}

  ngOnInit(): void {

  }

}
