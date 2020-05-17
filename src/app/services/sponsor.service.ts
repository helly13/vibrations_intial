import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Sponsor } from "../classes/sponsor";
@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsor_url="http://localhost:3000/sponsor";
  constructor(private _http:HttpClient) { }

  getSponsorList()
  {
    return this._http.get(this.sponsor_url);
  }
}
