import { Component, OnInit, Inject } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";
import { EvntService } from "../services/evnt.service";

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  Experience:string;
  Event_Name:string;
  Email:any="thakkarhelly13@gmail.com";
  Volunteer_Status:any;
  flag_applied:any="already_aplied";
  flag_limt:any="already_aplied to limit"

  constructor(private evnt_ser:EvntService,private act_router:ActivatedRoute,private _router:Router) { }

  ngOnInit(): void {
    this.Event_Name=this.act_router.snapshot.params["name"];
    this.evnt_ser.getVolunteerStatus(this.Email).subscribe(
      (data:any)=>
      {
        if(data=='0')
        {
          this.Volunteer_Status="Pending"
        }
        if(data=='1')
        {
          this.Volunteer_Status="Approved"
        }
        if(data=='-1')
        {
          this.Volunteer_Status="Rejected"
        }
      }
    );
  }

  onClickApply()
  {
    this.evnt_ser.applyVolunteer(this.Event_Name,{"email":this.Email,"exp_txt":this.Experience}).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data==this.flag_applied)
        {
          alert("Already Applied");
        }
        if(data==this.flag_limt)
        {
          alert("You have reached to maximun limit of Application");
        }
        else
        {
          alert("We have received your volunteer application");
        }
      }
    );
  }
  onclickBack()
  {
    this._router.navigate(["/event"]);
  }

}
