import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable, interval, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';
import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { EvntService } from "../services/evnt.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router,private localst:LocalStorageService,private sessionst:SessionStorageService,private evnt_ser:EvntService) { }
  flag:boolean;
  email_id:any;
  User_Name:string;
  ngOnInit(): void {



    this.email_id=this.sessionst.get('email_id');
    // console.log("header :: "+this.email_id);

    if(this.email_id)
    {
      this.flag=false;
      this.evnt_ser.getStudentDetailsById(this.email_id).subscribe(
        (data:any)=>{
          this.User_Name=data[0].name;
          if(this.User_Name.indexOf(' ')>0)
          {
            this.User_Name=this.User_Name.substring(0,this.User_Name.indexOf(' '))
          }
          else
          {
            this.User_Name=this.User_Name;
          }
        }
      );
    }
    else
    {
      this.flag=true;
    }


    // this.refreshData();
  }
  onClickLogin()
  {
    this._router.navigate(['login']);
    this.ngOnInit();
  }

  logout()
  {
    this.sessionst.remove('email_id');
    this.sessionst.remove('student_type');
    this._router.navigate(['login']);
    this.ngOnInit();
  }
}
