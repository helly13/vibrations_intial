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

  faq_list:Faq[]=[];
  email:string;
  que:string;

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

    this.faq_ser.addFaq_que({"email":this.email,"Query_String":this.que}).subscribe(
      (data:any)=>{
        console.log(data);
      }
    );

    this.onfaqReset();
  }

  onfaqReset()
   {
    //  console.log( "faqreset");
     this.email="";
     this.que="";
   }

  // resetForm(form?:NgForm)
  // {
  //   if(form)
  //   {
  //     form.reset();

  //   }
  // }

}

