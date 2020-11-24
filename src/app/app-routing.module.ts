import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { SkillsComponent } from './about/skills/skills.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const Routes: Routes = [
  {
    path: 'education',
    component: EducationComponent ,
    data: {
      backLabel: 'Jen\'s Home Page',
      showBackButton: true
    }
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
    component: AppComponent,
    data: {
      backUrl: '/',
      backLabel: 'Jen\'s Home Page',
      showBackButton: true
    }
  },
];

@NgModule({
  imports:
  [RouterModule,
  EducationComponent,
  EmploymentComponent,
  SkillsComponent,
  LoginComponent,
  AboutComponent ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
