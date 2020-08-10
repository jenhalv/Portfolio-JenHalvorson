import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EducationComponent } from './education/education.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCardModule } from '@angular/material/card';
import { IntroComponent } from './landing-page/intro/intro.component';
import { ContactMeComponent } from './contact-me/contact-me.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    EducationComponent,
    LandingPageComponent,
    ContactMeComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AppModule { }
