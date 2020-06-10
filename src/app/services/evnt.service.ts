import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EvntService {

  private show_event_url="http://localhost:3000/show_Events/";
  private participants_url="http://localhost:3000/participate_Events/";
  private event_team_url="http://localhost:3000/event_team";
  private volunteer_apply_url="http://localhost:3000/volunteer/";
  private volunteer_status_url="http://localhost:3000/check_volunterring/";
  private event_gallery_url="http://localhost:3000/eventgallary/";
  private student_details_url="http://localhost:3000/student/";


  constructor(private _http:HttpClient) { }


  getStudentDetailsById(email)
  {
    return this._http.get(this.student_details_url+email);
  }

  getShowEvent()
  {
    return this._http.get(this.show_event_url);
  }

  getEventDetailsByEventName(name:string)
  {
    return this._http.get(this.show_event_url+name);
  }

  eventRegisteration(item)
  {
    console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.participants_url,body,{headers:_head});
  }

  getEventTeam()
  {
    return this._http.get(this.event_team_url);

  }

  applyVolunteer(Event_Name,item)
  {
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.volunteer_apply_url+Event_Name,body,{headers:_head});
  }

  getVolunteerStatus(email:any)
  {
    return this._http.get(this.volunteer_status_url+email);
  }

  getEventImages()
  {
    return this._http.get(this.event_gallery_url);
  }
}
