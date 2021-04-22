import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  CARDS = [
    {
      logo: 'assets/projects-photos/favicon_JH.png',
      logoAlt: 'My Portfolio favicon',
      title: 'Front End Angular Developer',
      subtitle: '<a href="https://portfolio-jenhalvorson.web.app/">Personal Portfolio</a>',
      image: 'assets/projects-photos/Project_JH.png',
      imageAlt: 'My Portfolio',
      content: 'Building from the Hello World Angular app, I created this unique customized personal Portfolio using HTML & SCSS, as well as incorporating routing to showcase my education, employment, projects, and skills.  I house the site using Firebase and use their storage for images and code.  This project has given me a great deal of pride since it’s my first completely written app from scratch.  I added in my own images and created icons (like the resume, computer, and grad cap) using Adobe Photoshop & Illustrator.  The portfolio will always be a work in progress as I add more information.  My goal is to have some basic javascript functions to showcase a few small projects I have completed from different coursework.<ul><p>When I built my portfolio, I considered the following things:</p><li>Is the site responsive/does it looks great on all devices?</li><li>How well designed is the user interface/is the look, feel, and interactivity of the site straightfoward?</li><li>Is it written in Angular (one of the most popular frameworks for user interface development!)?</li></ul>',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_TD.png',
      logoAlt: 'checkmark',
      title: 'Front End Angular Developer',
      subtitle: '<a href="https://my-todo-list-2021.web.app/">To Do List</a>',
      image: 'assets/projects-photos/Project_TD.png',
      imageAlt: 'To Do List App Website',
      content: 'I was recently a mentor for ngGirls conference (ngconf 2021) and followed the Angular To-Do List App tutorial adding in my own flair. This tutorial breaks down how to:<ul><li>initialize your Todo application using Angular CLI,</li><li>generate components to represent individual variables & methods,</li><li>utilize a Todo DataService for saving and managing tasks,</li><li>add appealing style to improve user interface, and</li><li>deploy your application to GitHub & StackBlitz.</li></ul>This project was completed during an NGgirls conference in 2019.  I attended again in 2020 (virtually) and created another to-do list as well.  I had a great time networking with fellow Angular newbies and pros.  This project helped instill my basic knowledge of the angular platform.  I created a login and added my own flare with style. src="assets/projects-photos/Project_NG.png"',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_bird.png',
      logoAlt: 'bird',
      title: 'Front End Angular Developer',
      subtitle: '<a href="https://tour-of-backyard-birds.web.app/home">Tour of Backyard Birds</a>',
      image: 'assets/projects-photos/Project_Bird.png',
      imageAlt: 'Tour of Backyard Birds Website',
      content: 'After cloning <a href="https://github.com/johnpapa/angular-tour-of-heroes/">John Papa’s Tour of Heroes app</a>, I added my own style and layout preferences to make my <a href="https://tour-of-backyard-birds.web.app/">Tour of Backyard Birds</a> app.  I designed a button & created a function that would reset the bird details page back to the initial value.  I plan to implement an image carousel.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PP.png',
      logoAlt: 'cluster of pecans in the shell favicon',
      title: 'Front End Angular Developer',
      subtitle: '<a href="https://paulspecans.com/">Paul\'s Pecans</a>',
      image: 'assets/projects-photos/Project_PP.png',
      imageAlt: 'Paul\'s Pecans Website',
      content: 'Using my growing knowledge of Angular, I created a website for my family’s pecan farming business.  What started with videos of my father teaching me the ins and outs of the grafting process quickly turned into an idea of housing a site to include the information he was teaching me, some family history, and ordering options.  I used Material Designs throughout the site to make it simple, pleasant, and functional.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_AO.png',
      logoAlt: 'Arvid Outdoors Logo',
      title: 'Front End Angular Developer',
      subtitle: '<a href="https://www.arvidoutdoors.com">Arvid Outdoors</a>',
      image: 'assets/projects-photos/Project_AO.png',
      imageAlt: 'Arvid Website Image',
      content: 'Starting with basic HTML, SCSS, and TS additions and changes to Arvid Outdoors using Angular in Visual Studio Code, I later designed, created, and styled the <i>Let\'s Get Social</i>, <i>About Us</i>, <i>FAQ</i>, & <i>Adventure Spotlight</i> components. I continue updating small changes to the website, writing or including new articles on the Adventure Spotlight blog about outdoor adventures, and promote & market the site on social media.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HH.png',
      logoAlt: 'Apple on books classroom favicon',
      title: 'Weebly Website Designer',
      subtitle: '<a href="https://halvorsonshome.weebly.com/">Classroom Website</a>',
      image: 'assets/projects-photos/Project_HH.png',
      imageAlt: 'Mrs. Halvorson\'s Classroom Website',
      content: 'Using a template from Weebly, I embellished Mrs. Halvorson’s Home, a Weebly website to use daily in my kindergarten classroom that had easy-to-use tabs with custom educational pictures for my students, as well as other teachers in my district.  HTML was implemented to image source the child-friendly pictures saved within my site and a link directed the user to other supplemental educational websites.  CSS was used to make image borders and specific sizes were added to help the site look clean and user-friendly.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PIF.png',
      logoAlt: 'Pictures in Focus favicon',
      title: 'Weebly Website Designer',
      subtitle: '<a href="http://picturesinfocus.weebly.com/">Pictures in Focus</a>',
      image: 'assets/projects-photos/Project_PIF.png',
      imageAlt: 'Pictures in Focus Website',
      content: 'From 2004-2011, I built my own photography business and personalized a weebly template to showcase a few of my favorite wedding & engagement pictures.  The site is straightforward and fundamental.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_RPS.png',
      logoAlt: 'Roof Power Solar favicon',
      title: 'Weebly Website Designer',
      subtitle: '<a href="http://www.roofpowersolar.com/">Roof Power Solar</a>',
      image: 'assets/projects-photos/Project_RPS.png',
      imageAlt: 'Roof Power Solar Website',
      content: 'A local company, Roof Power Solar, hired me to create a basic customized weebly-hosted site that the owner would be able to edit on his own as needed.  Using some custom HTML and style, the company color scheme, and images & text supplied by the owner, I made the site eye-appealing as well as functional.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HG.png',
      logoAlt: 'Home Gardening favicon',
      title: 'Weebly Website Designer',
      subtitle: '<a href="http://moseeds.weebly.com/">Home Gardening Seeds</a>',
      image: 'assets/projects-photos/Project_HG.png',
      imageAlt: 'Home Gardening Website',
      content: 'Home Gardening, a local seed-selling business, hired me to create a basic customized weebly-hosted site that the owner could connect to his Etsy selling site.  Using a basic weebly template, and images & text supplied by the owner, the site is clean and simple.',
      closed: false
    },
    // {
    //   logo: 'assets/projects-photos/favicon_NG.png',
    //   logoAlt: 'Angular Girls favicon',
    //   title: 'Web Developer',
    //   subtitle: 'To Do Angular Tutorial',
    //   image: 'assets/projects-photos/Project_NG.png',
    //   imageAlt: 'To Do Project',
    // tslint:disable-next-line:max-line-length
    //   content: 'This project was completed during an NGgirls conference in 2019.  I attended again in 2020 (virtually) and created another to-do list as well.  I had a great time networking with fellow Angular newbies and pros.  This project helped instill my basic knowledge of the angular platform.  I created a login and added my own flare with style.',
    //   closed: false
    // }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
