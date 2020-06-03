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
import { TeamComponent } from "./team/team.component";
import { AftermovieComponent } from './aftermovie/aftermovie.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { EventgalleryComponent } from './eventgallery/eventgallery.component';
import { EvntComponent } from "./evnt/evnt.component";
import { FaqComponent } from './faq/faq.component';
import { SponsorComponent } from './sponsor/sponsor.component';
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
import { ProductComponent } from './product/product.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { NgxWebstorageModule } from "ngx-webstorage";
import { AngularWebStorageModule } from "angular-web-storage";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    ContactComponent,
    PerformerComponent,
    TeamComponent,
    AftermovieComponent,
    ScheduleComponent,
    EventgalleryComponent,
    EvntComponent,
    FaqComponent,
    SponsorComponent,
    EventRegisterComponent,
    VolunteerComponent,
    LoginComponent,
    ProductComponent,
    ResetpasswordComponent,
    ForgetpasswordComponent,
    SignUpComponent,
    NotFoundComponent,

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
    PdfViewerModule,
    AngularWebStorageModule,
    MatTooltipModule,
    MatSelectModule,
    MatRadioModule,
    NgxWebstorageModule.forRoot()




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
