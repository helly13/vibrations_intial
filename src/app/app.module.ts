import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { GoogleMapsModule } from "@angular/google-maps";
import { AgmCoreModule } from "@agm/core";
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { PerformerComponent } from './performer/performer.component';
import { VenueComponent } from './venue/venue.component';
import { TeamComponent } from "./team/team.component";
import { BrocherComponent } from './brocher/brocher.component';
import { AftermovieComponent } from './aftermovie/aftermovie.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventgalleryComponent } from './eventgallery/eventgallery.component';
import { EvntComponent } from "./evnt/evnt.component";
import { FaqComponent } from './faq/faq.component';
import { SponsorComponent } from './sponsor/sponsor.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    PerformerComponent,
    VenueComponent,
    TeamComponent,
    BrocherComponent,
    AftermovieComponent,
    ScheduleComponent,
    EventgalleryComponent,
    EvntComponent,
    FaqComponent,
    SponsorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    GoogleMapsModule,
    AgmCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
