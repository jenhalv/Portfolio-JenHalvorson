import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  imageObject: Array<object> = [{

    thumbImage: 'assets/personal-photos/jen1.jfif',
    alt: 'alt of image',
    title: 'title of image'
}, {

    thumbImage: 'assets/personal-photos/Jen-Colorado.jpg',
    title: 'Image title', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}, {
    image: 'assets/personal-photos/Jen-Arizona.jpg',
    thumbImage: 'assets/personal-photos/Jen-Arizona.jpg',
    title: 'Image title', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
  }, {
    image: 'assets/personal-photos/Jen-Colorado.jpg',
    thumbImage: 'assets/personal-photos/Jen-Colorado.jpg',
    title: 'Image title', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}, {
    image: 'assets/personal-photos/Jen-Arizona.jpg',
    thumbImage: 'assets/personal-photos/Jen-Arizona.jpg',
    title: 'Image title', // Optional: You can use this key if want to show image with title
    alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}, {
  image: 'assets/personal-photos/Jen-Colorado.jpg',
  thumbImage: 'assets/personal-photos/Jen-Colorado.jpg',
  title: 'Image title', // Optional: You can use this key if want to show image with title
  alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}, {
  image: 'assets/personal-photos/Jen-Arizona.jpg',
  thumbImage: 'assets/personal-photos/Jen-Arizona.jpg',
  title: 'Image title', // Optional: You can use this key if want to show image with title
  alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}, {

  image: 'assets/personal-photos/jen1.jfif',
  thumbImage: 'assets/personal-photos/jen1.jfif',
  title: 'Image title', // Optional: You can use this key if want to show image with title
  alt: 'Image alt' // Optional: You can use this key if want to show image with alt
},
{
  image: 'assets/personal-photos/jen1.jfif',
  thumbImage: 'assets/personal-photos/jen1.jfif',
  title: 'Image title', // Optional: You can use this key if want to show image with title
  alt: 'Image alt' // Optional: You can use this key if want to show image with alt
}
];

  constructor() { }

  ngOnInit(): void {
  }

}




