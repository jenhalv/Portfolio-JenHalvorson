import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCardModule } from '@angular/material/card';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DescriptionComponent } from './landing-page/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgImageSliderModule } from 'ng-image-slider';
import { GalleryModule } from '@ngx-gallery/core';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { MenuButtonComponent } from './toolbar/menu-button/menu-button.component';
import { AboutComponent } from './about/about.component';

import { SkillsComponent } from './about/skills/skills.component';
import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    LandingPageComponent,
    ContactMeComponent,
    DescriptionComponent,
    CarouselComponent,
    ImageSliderComponent,
    MenuButtonComponent,
    AboutComponent,
    EmploymentComponent,
    SkillsComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    NgImageSliderModule,
    RouterModule,
    GalleryModule.withConfig({
      loadingMode: 'indeterminate'
    }),
    AppRoutingModule,
  ],

  providers: [],
  bootstrap: [AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})

export class AppModule { }
