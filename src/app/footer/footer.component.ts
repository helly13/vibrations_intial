import { Component, OnInit } from '@angular/core';

import { LocalStorageService,SessionStorageService } from "angular-web-storage";
import { Router } from "@angular/router";
import { SponsorService } from "../services/sponsor.service";
import { Sponsor } from '../classes/sponsor';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _router: Router,private sponsor_ser:SponsorService,private sessionst:SessionStorageService) { }

  email_id:any;
  flag:boolean;
  sponsor_list:Sponsor[]=[];

  ngOnInit(): void {
    this.email_id=this.sessionst.get('email_id');
    if(this.email_id)
    {
      this.flag=false;
    }
    else
    {
      this.flag=true;
    }

    this.sponsor_ser.getSponsorList().subscribe(
      (data:any[])=>{
        this.sponsor_list=data;
        console.log(this.sponsor_list);
      }
    );
  }

  logout()
  {
    this.sessionst.remove('email_id');
    this.sessionst.remove('student_type');
    this._router.navigate(['login']);
    this.ngOnInit();
  }

}
