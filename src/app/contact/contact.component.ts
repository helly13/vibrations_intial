import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
