import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformerComponent } from "./performer/performer.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { TeamComponent } from "./team/team.component";
import { AftermovieComponent } from "./aftermovie/aftermovie.component";
import { EvntComponent } from "./evnt/evnt.component";
import { EventgalleryComponent } from "./eventgallery/eventgallery.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { FaqComponent } from "./faq/faq.component";
import { SponsorComponent } from "./sponsor/sponsor.component";
import { EventRegisterComponent } from "./event-register/event-register.component";
import { VolunteerComponent } from "./volunteer/volunteer.component";
import { ProductComponent } from "./product/product.component";
import { LoginComponent } from "./login/login.component";
import { ForgetpasswordComponent } from "./forgetpassword/forgetpassword.component";
import { ResetpasswordComponent } from "./resetpassword/resetpassword.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"performer",component:PerformerComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"contactus",component:ContactComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"team",component:TeamComponent},
  {path:"aftermovie",component:AftermovieComponent},
  {path:"event",component:EvntComponent},
  {path:"eventgallery",component:EventgalleryComponent},
  {path:"schedule",component:ScheduleComponent},
  {path:"faq",component:FaqComponent},
  {path:"sponsor",component:SponsorComponent},
  {path:"eventreg/:name",component:EventRegisterComponent},
  {path:"volunteer/:name",component:VolunteerComponent},
  {path:"product",component:ProductComponent},
  {path:"login",component:LoginComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"resetpassword",component:ResetpasswordComponent},
  {path:"sign_up",component:SignUpComponent}


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);
