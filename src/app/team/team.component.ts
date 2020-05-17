import { Component, OnInit } from '@angular/core';

import { EvntService } from "../services/evnt.service";


// declare const teamfun:any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team:any[]=[];
  i:number=0;

  constructor(private evnt_ser:EvntService) { }

  ngOnInit(): void {
    this.evnt_ser.getEventTeam().subscribe(
      (data:any[])=>{
        // console.log(data);
        while(this.i<data.length)
        {
          this.team.push(data[this.i]);
          this.i=this.i+1;
        }
        console.log(this.team);

      }
    );
  }

}
