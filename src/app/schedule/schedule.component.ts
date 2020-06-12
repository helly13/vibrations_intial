import { Component, OnInit } from '@angular/core';

import { EvntService } from "../services/evnt.service";
import { removeSummaryDuplicates } from '@angular/compiler';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private evnt_ser:EvntService) { }

  Event_details:any[]=[];
  Event_dates:any[]=[];
  Event_day1_details:any[]=[];
  Event_day2_details:any[]=[];
  Event_day3_details:any[]=[];
  i:number=0;

  ngOnInit(): void {
    this.evnt_ser.getShowEvent().subscribe(
      (data:any[])=>{
        console.log(data);
        while(this.i<data.length)
        {
          if(data[this.i].Sub_Events.Date=="12/2/2020"|| data[this.i].Sub_Events.Date=="12/02/2020")
          {
            this.Event_day1_details.push(data[this.i].Sub_Events);
          }
          else if(data[this.i].Sub_Events.Date=="13/2/2020" || data[this.i].Sub_Events.Date=="13/02/2020")
          {
            this.Event_day2_details.push(data[this.i].Sub_Events);
          }
          else if(data[this.i].Sub_Events.Date=="14/2/2020" || data[this.i].Sub_Events.Date=="14/02/2020" )
          {
            this.Event_day3_details.push(data[this.i].Sub_Events);
          }

          this.Event_details.push(data[this.i].Sub_Events);
          this.Event_dates.push(data[this.i].Sub_Events.Date)
          this.i=this.i+1;
        }
        // console.log(this.Event_details);
        // console.log(this.Event_dates);
        console.log(this.Event_day1_details);
        console.log(this.Event_day2_details);
        console.log(this.Event_day3_details);
      }
    );


  }




}
