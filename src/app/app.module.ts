import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EducationComponent } from './education/education.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BriefDescriptionComponent } from './brief-description/brief-description.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    EducationComponent,
    LandingPageComponent,
    BriefDescriptionComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
