import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  imageObject: Array<object> = [

{   image: 'assets/experience-icons/Angular_Icon.png',
    thumbImage: 'assets/experience-icons/Angular_Icon.png',
    alt: 'Angular Logo',
},

{   thumbImage: 'assets/experience-icons/HTML_Icon.png',
      alt: 'HTML Logo',
},

{   thumbImage: 'assets/experience-icons/CSS_Icon.png',
      alt: 'CSS Logo',
},

{   thumbImage: 'assets/experience-icons/SASS_Icon.png',
      alt: 'SASS Logo',
},

{   thumbImage: 'assets/experience-icons/TS_Icon.png',
      alt: 'Typescript Logo',
},

{   thumbImage: 'assets/experience-icons/Java_Icon.png',
      alt: 'Javascript Logo',
},
  {
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
