import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  center:google.maps.LatLngLiteral;
  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition(x=>{
      this.center={
        lat:x.coords.latitude,
        lng:x.coords.longitude
      };
    })
  }



}
