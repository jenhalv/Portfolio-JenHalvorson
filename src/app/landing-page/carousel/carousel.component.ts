import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('fadeInOut', [
    state('void',
    style({ opacity: 0 })),
    transition('void <=> *', animate(1000)),
  ])]
})

export class CarouselComponent {

  constructor() { }

}
