import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReadMoreComponent implements OnInit {
  faChevronRight = faChevronRight;

  @Input() dataLength: boolean;

  public isCollapsed = true;
  public isCollapsable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
