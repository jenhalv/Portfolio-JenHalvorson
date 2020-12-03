import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { SkillsComponent } from './about/skills/skills.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'education',
    component: EducationComponent ,
    // data: {
    //   backLabel: 'Jen\'s Home Page',
    //   showBackButton: true
    // }
  },
  {
    path: 'employment',
    component: EmploymentComponent,
    data: {
      backLabel: 'Jen\'s Home Page',
      showBackButton: true
    }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: {
      backLabel: 'Jen\'s Home Page',
      showBackButton: true
    }
  },
  {
    path: '',
    component: LandingPageComponent,
    data: {
      backUrl: '/',
      backLabel: 'Jen\'s Home Page',
      showBackButton: true
    }
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
