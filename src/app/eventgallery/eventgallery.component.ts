import { Component, OnInit } from '@angular/core';

import { EvntService } from "../services/evnt.service";

@Component({
  selector: 'app-eventgallery',
  templateUrl: './eventgallery.component.html',
  styleUrls: ['./eventgallery.component.css']
})
export class EventgalleryComponent implements OnInit {

  constructor(private evnt_ser:EvntService) { }

  Event_Images:any[]=[];

  ngOnInit(): void {

    this.evnt_ser.getEventImages().subscribe(
      (data:any[])=>{
        this.Event_Images=data;
        console.log(this.Event_Images);
      }
    );


  }

}
