import { Component, OnInit, NgModule } from '@angular/core';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }

  navToEducation() {
    this.router.navigate(['about/education']);
  }


  navToWork() {
    this.router.navigate(['work']);
  }

  navToSkills() {
    this.router.navigate(['skills']);
  }

}
