import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent implements OnInit {

  constructor() { }

  panelOpenState:boolean=false;
  ngOnInit(): void {
  }

}
