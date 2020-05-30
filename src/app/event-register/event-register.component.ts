import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router,ActivatedRoute } from "@angular/router";
import { EvntService } from "../services/evnt.service";

export class participants
{
  constructor(
    public event:string,
    public email:string,
    public institute:string,
    public phone:string,
    public team?:string,
    public team_size?:string
    ){}
}

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css']
})
export class EventRegisterComponent implements OnInit {



  Email_id:string;
  Name:string;
  Mobile:string;
  Colleage_Name:string;
  Team_Name:string;
  Team_Size:number;
  Rules_check:boolean=false;
  Event_Name:string;
  Event_Details:any[]=[];
  pdf_file:any;
  team_flag:boolean=false;
  already_participated:any = "You have already participated in this event";
  successfully_participated:any="Your participation request is sucessfully accepted";

  constructor(private _formBuilder: FormBuilder,private act_router:ActivatedRoute,private _router:Router,private evnt_ser:EvntService) { }

  ngOnInit(): void {
    this.Event_Name=this.act_router.snapshot.params["name"];
    console.log(this.Event_Name);
    this.evnt_ser.getEventDetailsByEventName(this.Event_Name).subscribe(
      (data:any[])=>{
        // console.log(data);
        // console.log(data[0].Sub_Events.pdf);
        this.Event_Details.push(data[0].Sub_Events);
        console.log(this.Event_Details[0].pdf);
        this.pdf_file="http://localhost:3000/"+this.Event_Details[0].pdf;
        console.log(this.pdf_file);

      }
    );


  }



  onKeyPressText(event:any)
  {
    // console.log(event);
    if(event.charCode>=65 && event.charCode<90 || event.key==' ')
    {

    }
    else if(event.charCode>=97 && event.charCode<=122 || event.key==' ')
    {

    }
    else
    {
      event.preventDefault();
    }
  }


  onKeyPressNumber(event:any)
  {
    // console.log(event);
    if(event.charCode>=48 && event.charCode<=57)
    {

    }
    else
    {
      event.preventDefault();
    }
  }

  onRegister()
  {
    console.log("Register Clicked");
    this.evnt_ser.eventRegisteration(new participants(this.Event_Name,this.Email_id,this.Colleage_Name,this.Mobile)).subscribe(
      (data:any[])=>{
        console.log(data);
        if(data==this.already_participated)
        {
          alert("You have already participated in this event");
         this._router.navigate(["/event"]);
        }
        if(data==this.successfully_participated)
        {
          alert("Your participation request is sucessfully accepted");
          this._router.navigate(["/event"]);
        }
      }
    );
  }

  onBack()
  {
    this._router.navigate(["/event"]);
  }
  saveDetails(NgForm)
  {

  }
}
