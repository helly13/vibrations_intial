import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from "ng2-pdf-viewer";

import { FormsModule,ReactiveFormsModule } from "@angular/forms";
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
import { GrabpassComponent } from './grabpass/grabpass.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { EventRegisterComponent } from './event-register/event-register.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LoginComponent } from './login/login.component';


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
    SponsorComponent,
    GrabpassComponent,
    EventRegisterComponent,
    VolunteerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    GoogleMapsModule,
    AgmCoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    NgxExtendedPdfViewerModule,
    PdfViewerModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
