import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private login_url="http://localhost:3000/use_login/";
  private signup_url="http://localhost:3000/signup/";
  private forget_password_url="http://localhost:3000/forgetpassword/";
  private reset_password_url="http://localhost:3000/resetpassword/";
  constructor(private _http:HttpClient) { }

  getLoggedin(item)
  {
    // console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.login_url,body,{headers:_head});
  }

  onSignup(item)
  {
    console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.signup_url,body,{headers:_head});
  }

  onForgetPassword(item)
  {
    // console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.forget_password_url,body,{headers:_head});
  }

  onResetPassword(item)
  {
    // console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.reset_password_url,body,{headers:_head});
  }
}
