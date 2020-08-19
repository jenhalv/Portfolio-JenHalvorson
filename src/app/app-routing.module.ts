import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './about/education/education.component';
import { WorkComponent } from './about/work/work.component';
import { SkillsComponent } from './about/skills/skills.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'education', component: EducationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '', component: AppComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
