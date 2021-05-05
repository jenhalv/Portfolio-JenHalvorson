import { Component, OnInit, Input } from '@angular/core';
import { CARDS } from '../../cards';
import { LogoIconsComponent } from './logo-icons/logo-icons.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() card: CARDS;
  @Input() LogoIconsComponent = [];

  CARDS = [
    {
      logo: 'assets/projects-photos/favicon_JH.png',
      logoAlt: 'My Portfolio favicon',
      title: 'Front End Developer',
      subtitle: '<a href="https://portfolio-jenhalvorson.web.app/">Personal Portfolio</a>',
      image: 'assets/projects-photos/Project_JH.png',
      imageAlt: 'My Portfolio',
      content: 'Building from the Hello World Angular app, I created this unique customized personal Portfolio using HTML & SCSS, as well as incorporating routing to showcase my education, employment, projects, and skills.  I house the site using Firebase and use their storage for images and code.  This project has given me a great deal of pride since it’s my first completely written app from scratch.  I added in my own images and created icons (like the resume, computer, and grad cap) using Adobe Photoshop & Illustrator.  The portfolio will always be a work in progress as I add more information.  My goal is to have some basic javascript functions to showcase a few small projects I have completed from different coursework.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
          iconAlt: 'Angular Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
          iconAlt: 'SASS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
          iconAlt: 'Typescript Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
          iconAlt: 'Firebase Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
          iconAlt: 'GitHub Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_TD.png',
      logoAlt: 'checkmark',
      title: 'Front End Developer',
      subtitle: '<a href="https://my-todo-list-2021.web.app/">To Do List</a>',
      image: 'assets/projects-photos/Project_TD.png',
      imageAlt: 'To Do List App Website',
      content: 'In April 2021, I was a mentor for <a target="_blank" href="https://twitter.com/AngularGirls">ngGirls conference</a> (<a target="_blank" href="https://workshops.ng-girls.org/ngconf-2021/">ngconf 2021</a>)!<br><br>I followed the <a target="_blank" href="https://ng-girls.gitbook.io/todo-list-tutorial/">Angular To-Do List App tutorial</a> and had some fun adding in my own flair.<br><br>This tutorial breaks down how to:<ul><li>initialize your To Do application using Angular CLI,</li><li>generate components to represent individual variables & methods,</li><li>utilize a To Do DataService for saving and managing tasks,</li><li>add appealing style to improve user interface, and</li><li>deploy your application to GitHub & StackBlitz.</li></ul>',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
          iconAlt: 'Angular Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
          iconAlt: 'SASS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
          iconAlt: 'Typescript Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
          iconAlt: 'Firebase Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
          iconAlt: 'GitHub Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
      ],
      add: '<h4>Source Code:&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://github.com/jenhalv/To-Do-List-Angular-App">To-Do-List-Angular-App</a></h4><h4>Additional Info:&nbsp;&nbsp;&nbsp;In June 2019, I attended my first ngGirls conference & followed this same to do app tutorial.&nbsp;&nbsp;It included creating a login.</h4><img width="145px" src="https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Projects%2FToDo.jpg?alt=media&token=3cba5e11-f141-4f06-ae02-4e679b0e59b3"/>',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_bird.png',
      logoAlt: 'bird',
      title: 'Front End Developer',
      subtitle: '<a href="https://tour-of-backyard-birds.web.app/home">Tour of Backyard Birds</a>',
      image: 'assets/projects-photos/Project_Bird.png',
      imageAlt: 'Tour of Backyard Birds Website',
      content: 'After cloning <a href="https://github.com/johnpapa/angular-tour-of-heroes/">John Papa’s Tour of Heroes app</a>, I added my own style and layout preferences to make my <a href="https://tour-of-backyard-birds.web.app/">Tour of Backyard Birds</a> app.  I designed a button & created a function that would reset the bird details page back to the initial value.  I plan to implement an image carousel.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
          iconAlt: 'Angular Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
          iconAlt: 'SASS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
          iconAlt: 'Typescript Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
          iconAlt: 'Firebase Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
          iconAlt: 'GitHub Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PP.png',
      logoAlt: 'cluster of pecans in the shell favicon',
      title: 'Front End Developer',
      subtitle: '<a href="https://paulspecans.com/">Paul\'s Pecans</a>',
      image: 'assets/projects-photos/Project_PP.png',
      imageAlt: 'Paul\'s Pecans Website',
      content: 'Using my growing knowledge of Angular, I created a website for my family’s pecan farming business.  What started with videos of my father teaching me the ins and outs of the grafting process quickly turned into an idea of housing a site to include the information he was teaching me, some family history, and ordering options.  I used Material Designs throughout the site to make it simple, pleasant, and functional.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
          iconAlt: 'Angular Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
          iconAlt: 'SASS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
          iconAlt: 'Typescript Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
          iconAlt: 'Firebase Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
          iconAlt: 'GitHub Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_AO.png',
      logoAlt: 'Arvid Outdoors Logo',
      title: 'Front End Developer',
      subtitle: '<a href="https://www.arvidoutdoors.com">Arvid Outdoors</a>',
      image: 'assets/projects-photos/Project_AO.png',
      imageAlt: 'Arvid Website Image',
      content: 'Starting with basic HTML, SCSS, and TS additions and changes to Arvid Outdoors using Angular in Visual Studio Code, I later designed, created, and styled the <i>Let\'s Get Social</i>, <i>About Us</i>, <i>FAQ</i>, & <i>Adventure Spotlight</i> components. I continue updating small changes to the website, writing or including new articles on the Adventure Spotlight blog about outdoor adventures, and promote & market the site on social media.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
          iconAlt: 'Angular Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
          iconAlt: 'SASS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
          iconAlt: 'Typescript Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
          iconAlt: 'Firebase Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
          iconAlt: 'GitHub Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HH.png',
      logoAlt: 'Apple on books classroom favicon',
      title: 'Website Designer',
      subtitle: '<a href="https://halvorsonshome.weebly.com/">Classroom Website</a>',
      image: 'assets/projects-photos/Project_HH1.png',
      imageAlt: 'Mrs. Halvorson\'s Classroom Website',
      content: 'Using a template from Weebly, I embellished Mrs. Halvorson’s Home, a Weebly website to use daily in my kindergarten classroom that had easy-to-use tabs with custom educational pictures for my students, as well as other teachers in my district.  HTML was implemented to image source the child-friendly pictures saved within my site and a link directed the user to other supplemental educational websites.  CSS was used to make image borders and specific sizes were added to help the site look clean and user-friendly.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FCSS.png?alt=media&token=00e06da8-1624-4c5c-8d6c-c2177f09c908',
          iconAlt: 'CSS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fweebly.png?alt=media&token=f035affc-d4cc-473c-a6b3-ddf0d5a60bb9',
          iconAlt: 'Weebly Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PIF.png',
      logoAlt: 'Pictures in Focus favicon',
      title: 'Website Designer',
      subtitle: '<a href="http://picturesinfocus.weebly.com/">Pictures in Focus</a>',
      image: 'assets/projects-photos/Project_PIF1.png',
      imageAlt: 'Pictures in Focus Website',
      content: 'From 2004-2011, I built my own photography business and personalized a weebly template to showcase a few of my favorite wedding & engagement pictures.  The site is straightforward and fundamental.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FCSS.png?alt=media&token=00e06da8-1624-4c5c-8d6c-c2177f09c908',
          iconAlt: 'CSS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fweebly.png?alt=media&token=f035affc-d4cc-473c-a6b3-ddf0d5a60bb9',
          iconAlt: 'Weebly Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_RPS.png',
      logoAlt: 'Roof Power Solar favicon',
      title: 'Website Designer',
      subtitle: '<a href="http://www.roofpowersolar.com/">Roof Power Solar</a>',
      image: 'assets/projects-photos/Project_RPS1.png',
      imageAlt: 'Roof Power Solar Website',
      content: 'A local company, Roof Power Solar, hired me to create a basic customized weebly-hosted site that the owner would be able to edit on his own as needed.  Using some custom HTML and style, the company color scheme, and images & text supplied by the owner, I made the site eye-appealing as well as functional.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FCSS.png?alt=media&token=00e06da8-1624-4c5c-8d6c-c2177f09c908',
          iconAlt: 'CSS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fweebly.png?alt=media&token=f035affc-d4cc-473c-a6b3-ddf0d5a60bb9',
          iconAlt: 'Weebly Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HG.png',
      logoAlt: 'Home Gardening favicon',
      title: 'Website Designer',
      subtitle: '<a href="http://moseeds.weebly.com/">Home Gardening Seeds</a>',
      image: 'assets/projects-photos/Project_HG1.png',
      imageAlt: 'Home Gardening Website',
      content: 'Home Gardening, a local seed-selling business, hired me to create a basic customized weebly-hosted site that the owner could connect to his Etsy selling site.  Using a basic weebly template, and images & text supplied by the owner, the site is clean and simple.',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
          iconAlt: 'HTML Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FCSS.png?alt=media&token=00e06da8-1624-4c5c-8d6c-c2177f09c908',
          iconAlt: 'CSS Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fweebly.png?alt=media&token=f035affc-d4cc-473c-a6b3-ddf0d5a60bb9',
          iconAlt: 'Weebly Icon'
        },
      ],
      closed: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
