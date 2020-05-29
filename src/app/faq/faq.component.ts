import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Faq } from "../classes/faq.model";
import { FaqService } from "../services/faq.service";

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  // providers:[FaqService]
})
export class FaqComponent implements OnInit {

  panelOpenState :boolean= false;

  faq_list:Faq[]=[];
  Email_id:string;
  Question_asked:string;

  constructor(private faq_ser:FaqService) { }

  ngOnInit(): void {

    // console.log("hello");

    this.faq_ser.getFaqList().subscribe(
      (data:any[])=>{
        // console.log("hello from get fun");
        console.log(data);
        this.faq_list=data;
      }
     );

  }

  onSubmit()
  {
    // console.log(this.email);
    // console.log(this.que);
    // console.log(item);

    this.faq_ser.addFaq_que({"email":this.Email_id,"Query_String":this.Question_asked}).subscribe(
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
     this.Email_id="";
     this.Question_asked="";
   }

   saveDetails(NgForm)
   {

   }

}

