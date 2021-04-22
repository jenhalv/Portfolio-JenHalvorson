import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { ProjectsComponent } from './about/projects/projects.component';
import { SkillsComponent } from './about/skills/skills.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { DescriptionComponent } from './landing-page/description/description.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { ReadMoreComponent } from './read-more/read-more.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProjectCardComponent } from './about/projects/project-card/project-card.component';
import { SafePipeModule } from 'safe-pipe';
import { SidenavComponent } from './toolbar/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FlexLayoutModule } from '@angular/flex-layout';
import { IntroComponent } from './intro/intro.component';
import { ContactComponent } from './contact/contact.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

const ANGULAR_MATERIAL_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatExpansionModule
];

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
    AboutComponent,
    EmploymentComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ReadMoreComponent,
    ProjectCardComponent,
    SidenavComponent,
    IntroComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxHideOnScrollModule,
    MatSidenavModule,
    FlexLayoutModule,
    FormsModule,
    NgImageSliderModule,
    FontAwesomeModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    SafePipeModule,
    ANGULAR_MATERIAL_MODULES
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
