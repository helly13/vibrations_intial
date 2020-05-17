import { Component, OnInit } from '@angular/core';

import { Sponsor } from "../classes/sponsor";
import { SponsorService } from "../services/sponsor.service";
import { HttpClient,HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.css']
})
export class SponsorComponent implements OnInit {

  sponsor_list:Sponsor[]=[];
  constructor(private sponsor_ser:SponsorService) { }

  ngOnInit(): void {
    this.sponsor_ser.getSponsorList().subscribe(
      (data:any[])=>{
        this.sponsor_list=data;
        console.log(this.sponsor_list);
      }
    );
  }

}
