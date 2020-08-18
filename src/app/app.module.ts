import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EducationComponent } from './education/education.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatCardModule } from '@angular/material/card';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { DescriptionComponent } from './landing-page/description/description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { NgImageSliderModule } from 'ng-image-slider';
import { GalleryModule } from '@ngx-gallery/core';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    EducationComponent,
    LandingPageComponent,
    ContactMeComponent,
    DescriptionComponent,
    CarouselComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    NgImageSliderModule,
    GalleryModule.withConfig({
      loadingMode: 'indeterminate'
    }),
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
