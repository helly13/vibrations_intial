import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Faq } from "../classes/faq.model";
import { FaqService } from "../services/faq.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  center:google.maps.LatLngLiteral;

  panelOpenState :boolean= false;
  i:number=0;
  faq_list:Faq[]=[];
  feedback_list:any[]=[];
  Question_Email_id:string;
  Question_asked:string;
  Feedback_String:string;
  Feedback_Email_id:string;

  constructor(private faq_ser:FaqService) { }



  ngOnInit(): void {

    // navigator.geolocation.getCurrentPosition(x=>{
    //   this.center={
    //     lat:x.coords.latitude,
    //     lng:x.coords.longitude
    //   };
    // })

    this.faq_ser.getFaqList().subscribe(
      (data:any[])=>{
        console.log(data);
        for(this.i=0;this.i<data.length;this.i++)
        {
          if(data[this.i].status==1)
          {
            this.faq_list.push(data[this.i]);
          }
          else
          {
            this.feedback_list.push(data[this.i]);
          }
        }
      }
     );
      console.log(this.feedback_list);
      console.log(this.faq_list);
  }

  onSubmitFeedback()
  {
    this.faq_ser.addFeedback({"email":this.Feedback_Email_id,"Query_String":this.Feedback_String}).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );

    alert("Thank you for your feedback");
    this.onfaqReset();

  }

  onSubmit()
  {
    // console.log(this.email);
    // console.log(this.que);
    // console.log(item);

    this.faq_ser.addFaq_que({"email":this.Question_Email_id,"Query_String":this.Question_asked}).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );

    alert("Your Question Successfully Submitted");
    this.onfaqReset();
  }

  onfaqReset()
   {
    //  console.log( "faqreset");
     this.Question_Email_id="";
     this.Question_asked=" ";
     this.Feedback_String=" ";
     this.Feedback_Email_id="";
   }

   saveDetails(NgForm)
   {

   }

}
