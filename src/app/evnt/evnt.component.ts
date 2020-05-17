import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Evnt } from "../classes/evnt";
import { EvntService } from "../services/evnt.service";
import { Router } from "@angular/router";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VolunteerComponent } from '../volunteer/volunteer.component';


@Component({
  selector: 'app-evnt',
  templateUrl: './evnt.component.html',
  styleUrls: ['./evnt.component.css']
})
export class EvntComponent implements OnInit {

  constructor(private evnt_ser:EvntService,private _router:Router,public dialog: MatDialog) { }
  event_list:Evnt[]=[];
  sub_events:any[]=[];
  event_name:any[]=[];
  i:number=0;
  ngOnInit(): void {
    this.showEvents();
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(VolunteerComponent, {
  //     width: '550px',
  //     data:{name:this.sub_events[0].Event_name}
  //   });
  // }

  onVolunteer(name:string)
  {
    this._router.navigate(["/volunteer", name]);
  }

  onEventReg(name:string)
  {
    // console.log("clicked");
    this._router.navigate(["/eventreg", name]);
  }

  showEvents()
  {
    this.evnt_ser.getShowEvent().subscribe(
      (data:any[])=>{
        console.log(data);
        console.log(data.length);
        while(this.i<data.length)
        {
          this.event_name.push(data[this.i].Sub_Events.Event_name);
          this.sub_events.push(data[this.i].Sub_Events);
          this.i=this.i+1;
        }
        console.log(this.event_name);
        console.log(this.sub_events);

        // console.log(data[0].Sub_Events.Event_name);
        // this.event_list=data;
        // console.log(this.event_list);
        // console.log();
        // // console.log(this.event_list[0].Sub_Events);
        // this.event_name=data.Sub_Events.Event_name;


      }
    );
  }

}
