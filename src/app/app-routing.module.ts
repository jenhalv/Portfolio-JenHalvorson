import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './about/education/education.component';
import { EmploymentComponent } from './about/employment/employment.component';
import { SkillsComponent } from './about/skills/skills.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsComponent } from './about/projects/projects.component';

const routes: Routes = [
  // {
  //   path: 'education',
  //   component: EducationComponent
  // },
  // {
  //   path: 'employment',
  //   component: EmploymentComponent
  // },
  // {
  //   path: 'projects',
  //   component: ProjectsComponent
  // },
  // {
  //   path: 'skills',
  //   component: SkillsComponent
  // },
  {
    path: '',
    component: LandingPageComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
