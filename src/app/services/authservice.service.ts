import { Injectable } from '@angular/core';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  email:string="";

  constructor(private _route:Router,private sessionst:SessionStorageService) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean  {
    this.email=this.sessionst.get('email_id');
    if(this.email!="")
    {
      console.log('yo baby');
      return true;
    }
    else
    {
      alert('Login is required');
      this._route.navigate([''])
    }

  }
}
