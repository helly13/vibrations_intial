import { Injectable } from '@angular/core';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService implements CanActivate {
  // email:string="";

  constructor(private _route:Router,private sessionst:SessionStorageService,private log_Ser:LoginService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean  {
    // this.email=this.sessionst.get('email_id');
    if(this.log_Ser.loggedIn())
    {
      console.log('yo baby');
      return true;
    }
    else
    {
      alert('Login is required');
      this._route.navigate(['']);
      return false;
    }

  }
}
