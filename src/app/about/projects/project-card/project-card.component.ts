import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  CARDS = [
    {
      logo: 'assets/projects-photos/favicon_AO.png',
      logoAlt: 'Arvid Outdoors Logo',
      title: 'Web Developer',
      subtitle: '<a href="https://www.arvidoutdoors.com">Arvid Outdoors</a>',
      image: 'assets/projects-photos/Project_AO.png',
      imageAlt: 'Arvid Website Image',
      content: 'Starting with basic HTML, SCSS, and TS additions and changes to <a href="https://www.arvidoutdoors.com">Arvid Outdoors</a> using Angular in Visual Studio Code, I later designed, created, and styled the <i>Let\'s Get Social</i>, <i>About Us</i>, <i>FAQ</i>, & <i>Adventure Spotlight</i> components. I continue updating small changes to the website, writing or including new articles on the Adventure Spotlight blog about outdoor adventures, and promote & market the site on social media.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HH.png',
      logoAlt: 'Apple on books classroom favicon',
      title: 'Web Designer',
      subtitle: '<a href="https://halvorsonshome.weebly.com/">Classroom Website</a>',
      image: 'assets/projects-photos/Project_HH.png',
      imageAlt: 'Mrs. Halvorson\'s Classroom Website',
      content: 'Using a template from Weebly, I embellished <a href="https://halvorsonshome.weebly.com/">Mrs. Halvorson’s Home</a>, a Weebly website to use daily in my kindergarten classroom that had easy-to-use tabs with custom educational pictures for my students, as well as other teachers in my district.  HTML was implemented to image source the child-friendly pictures saved within my site and a link directed the user to other supplemental educational websites.  CSS was used to make image borders and specific sizes were added to help the site look clean and user-friendly.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PIF.png',
      logoAlt: 'Pictures in Focus favicon',
      title: 'Web Designer',
      subtitle: '<a href="http://picturesinfocus.weebly.com/">Pictures in Focus</a>',
      image: 'assets/projects-photos/Project_PIF.png',
      imageAlt: 'Pictures in Focus Website',
      content: 'From 2004-2011, I built my own photography business and personalized a weebly template to showcase a few of my favorite wedding & engagement pictures.  The site is straightforward and fundamental.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_JH.png',
      logoAlt: 'My Portfolio favicon',
      title: 'Web Developer',
      subtitle: '<a href="https://portfolio-jenhalvorson.web.app/">Personal Portfolio</a>',
      image: 'assets/projects-photos/Project_JH.png',
      imageAlt: 'My Portfolio',
      content: 'Building from the Hello World Angular app, I created this unique customized personal <a href="https://portfolio-jenhalvorson.web.app/">Portfolio</a> using HTML & SCSS, as well as incorporating routing to showcase my education, employment, projects, and skills.  I house the site using Firebase and use their storage for images and code.  This project has given me a great deal of pride since it’s my first completely written app from scratch.  I added in my own images and created icons (like the resume, computer, and grad cap) using Adobe Photoshop & Illustrator.  The portfolio will always be a work in progress as I add more information.  My goal is to have some basic javascript functions to showcase a few small projects I have completed from different coursework.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_RPS.png',
      logoAlt: 'Roof Power Solar favicon',
      title: 'Web Designer',
      subtitle: '<a href="http://www.roofpowersolar.com/">Roof Power Solar</a>',
      image: 'assets/projects-photos/Project_RPS.png',
      imageAlt: 'Roof Power Solar Website',
      content: 'A local company, <a href="http://www.roofpowersolar.com/">Roof Power Solar</a>, hired me to create a basic customized weebly-hosted site that the owner would be able to edit on his own as needed.  Using some custom HTML and style, the company color scheme, and images & text supplied by the owner, I made the site eye-appealing as well as functional.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HG.png',
      logoAlt: 'Home Gardening favicon',
      title: 'Web Designer',
      subtitle: '<a href="http://moseeds.weebly.com/">Gardening Website</a>',
      image: 'assets/projects-photos/Project_HG.png',
      imageAlt: 'Home Gardening Website',
      content: '<a href="http://moseeds.weebly.com/">Home Gardening</a>, hired me to create a basic customized weebly-hosted site that the owner could connect to his Etsy selling site.  Using a basic weebly template, and images & text supplied by the owner, the site is clean and simple.',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_NG.png',
      logoAlt: 'Angular Girls favicon',
      title: 'Web Developer',
      subtitle: '<a href="http://moseeds.weebly.com/">Gardening Website</a>',
      image: 'assets/projects-photos/Project_NG.png',
      imageAlt: 'To Do Project',
      content: 'This project was completed during an NGgirls conference in 2019.  I attended again in 2020 (virtually) and created another to-do list as well.  I had a great time networking with fellow Angular newbies and pros.  This project helped instill my basic knowledge of the angular platform.  I created a login and added my own flare with style.  A link to the list may be added later (depending on login security).',
      closed: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
