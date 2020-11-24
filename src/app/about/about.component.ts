import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
  }

  navToEducation(): void {
    this.router.navigate(['about', 'education']);
  }

  navToEmployment(): void {
    this.router.navigate(['about', 'employment']);
  }

  navToSkills(): void {
    this.router.navigate(['about', 'skills']);
  }

}
