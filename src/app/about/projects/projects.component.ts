import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  data = 'I like this read-more component because it\'s very helpful. This tutorial so good. I will share it with others.';
  dataLength: boolean;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isReadMore(this.data);
  }

  // tslint:disable-next-line:typedef
  isReadMore(data: string) {
    // (data.length > 30) ? this.dataLength = false : this.dataLength = true;
    this.dataLength = !(data.length > 30);
  }
}

