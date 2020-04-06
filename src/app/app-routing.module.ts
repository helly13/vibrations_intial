import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerformerComponent } from "./performer/performer.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { VenueComponent } from "./venue/venue.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { TeamComponent } from "./team/team.component";
import { BrocherComponent } from "./brocher/brocher.component";
import { AftermovieComponent } from "./aftermovie/aftermovie.component";
import { EvntComponent } from "./evnt/evnt.component";
import { EventgalleryComponent } from "./eventgallery/eventgallery.component";
import { ScheduleComponent } from "./schedule/schedule.component";
import { FaqComponent } from "./faq/faq.component";
import { SponsorComponent } from "./sponsor/sponsor.component";

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"performer",component:PerformerComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"contact",component:ContactComponent},
  {path:"venue",component:VenueComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"team",component:TeamComponent},
  {path:"brocher",component:BrocherComponent},
  {path:"aftermovie",component:AftermovieComponent},
  {path:"event",component:EvntComponent},
  {path:"eventgallery",component:EventgalleryComponent},
  {path:"schedule",component:ScheduleComponent},
  {path:"faq",component:FaqComponent},
  {path:"sponsor",component:SponsorComponent},




];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=RouterModule.forRoot(routes);
