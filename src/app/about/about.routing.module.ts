import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';

@NgModule({
  imports: [
    RouterModule,
    SkillsComponent,
    EducationComponent,
    EmploymentComponent],
  providers: [],
  exports: [RouterModule],
  declarations: [EmploymentComponent]
})

export class AboutRoutingModule {}


