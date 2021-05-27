import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('900ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class CarouselComponent {
  currentSlide = 0;

  SLIDES = [
    { src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Slideshow%20Images%2FAboutUs.JPG?alt=media&token=6733d75d-a108-458e-b8d6-3805d9d039bd' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Slideshow%20Images%2FAdventureSpotlight.JPG?alt=media&token=46d66acb-40ae-4801-b010-3a7f35b7adb4' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Slideshow%20Images%2FFAQ.JPG?alt=media&token=71edb57d-4d78-4494-9396-2c04c67a0849' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Slideshow%20Images%2FLetsGetSocial.JPG?alt=media&token=8a318984-a92c-4b2b-95dc-d192956bfb88' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496' },
    { src: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.SLIDES.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.SLIDES.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
