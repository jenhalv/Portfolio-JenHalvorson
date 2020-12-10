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
import { MenuButtonComponent } from './toolbar/menu-button/menu-button.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatCardComponent } from './mat-card/mat-card.component';


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
  MatGridListModule
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
    MenuButtonComponent,
    AboutComponent,
    EmploymentComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    MatCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgImageSliderModule,
    RouterModule,
    AppRoutingModule,
    ANGULAR_MATERIAL_MODULES
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
