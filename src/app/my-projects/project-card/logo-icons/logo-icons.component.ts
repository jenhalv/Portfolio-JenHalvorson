import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-icons',
  templateUrl: './logo-icons.component.html',
  styleUrls: ['./logo-icons.component.scss']
})
export class LogoIconsComponent implements OnInit {
  @Input() ICONS = [];

  constructor() { }

  ngOnInit(): void {
  }
}
