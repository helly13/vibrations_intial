import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Faq } from "../classes/faq.model";
// import { Observable } from "rxjs/Observable";
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
// import 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  // selectedFaq:Faq; //to design form
  // faqarr:Faq[];    //for mongodb

  private faq_url="http://localhost:3000/faq/";
  private feedback_url="http://localhost:3000/feedback";
  constructor(private _http:HttpClient) { }


  getFaqList()
  {
    return this._http.get(this.faq_url);
  }

  addFaq_que(item:any){
    console.log(item);
    let _head=new HttpHeaders().set('Content-Type','application/json');
    let body=JSON.stringify(item);
    return this._http.post(this.faq_url,body,{headers:_head});
}

addFeedback(item:any){
  console.log(item);
  let _head=new HttpHeaders().set('Content-Type','application/json');
  let body=JSON.stringify(item);
  return this._http.post(this.feedback_url,body,{headers:_head});
}

}
