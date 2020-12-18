import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ReadMoreComponent implements OnInit {
  @Input() dataLength: boolean;
  // @Input() maxHeight: number; // enable below comment if you want to show 1 or 2 lines of the content element
  // @Input() maxWidth: number; // enable below comment if you want to show 1 or 2 lines of the content element
  public isCollapsed = true;
  public isCollapsable = false;

  constructor() { }

  ngOnInit(): void {
  }

}
