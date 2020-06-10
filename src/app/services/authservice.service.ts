import { Injectable } from '@angular/core';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class AuthserviceService implements CanActivate {
  email:string="";

  constructor(private _data:LoginService,private _route:Router,private sessionst:SessionStorageService) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean  {
    this.email=this.sessionst.get('email_id');
    if(this.email!=null)
    {
      return true;

    }
    else
    {
      alert('Login is required');
      this._route.navigate(['login'])
    }

  }
}

