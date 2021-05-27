import { Component, OnInit, Input } from '@angular/core';
import { PROJECTS } from '../../projects';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() card: PROJECTS;

  PROJECTS = [
    {
      logo: 'assets/projects-photos/favicon_JH.png',
      logoAlt: 'My Portfolio favicon',
      projectId: 'jen',
      title: 'Web Developer',
      subtitle: 'Personal Portfolio',
      subtitleLink: 'https://portfolio-jenhalvorson.web.app/',
      image: 'assets/projects-photos/Project_JH.png',
      imageAlt: 'My Portfolio',
      created: 'July 2020',
      content: '<ul><li>This SPA (Single Page Application) Portfolio was developed using Angular CLI in Visual Studio Code to display my knowledge of HTML, SASS/CSS, TypeScript, & Angular CLI commands.</li><li>Components were generated to display content, routing was added to navigate among different sections, data binding was incorporated for read-only data, and methods were created for user events (for example clicking the “About” or “Tools” tabs in this Project’s description).</li><li>Git, GitHub & GitKraken were used to manage and keep track of my source code history & host my repository.  Images are stored & the app is hosted on Firebase.</li></ul>',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41',
          iconAlt: 'VS Code Icon'
        },
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
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FgitLogo.png?alt=media&token=0d6e1f66-3098-4660-8338-694412989e25',
          iconAlt: 'Git Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
          iconAlt: 'Adobe Photoshop Icon'
        },
      ],
      code: 'https://github.com/jenhalv/Portfolio-JenHalvorson',
      codeName: 'Portfolio-JenHalvorson',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_TD.png',
      logoAlt: 'checkmark',
      title: 'Web Developer',
      subtitle: 'To Do List',
      subtitleLink: 'https://my-todo-list-2021.web.app/',
      image: 'assets/projects-photos/Project_TD.png',
      imageAlt: 'To Do List App Website',
      created: 'April 2021',
      content: '<ul><li>I was a mentor for the <a target="_blank" rel="noopener" href="https://workshops.ng-girls.org/ngconf-2021/">ngGirls workshop</a>/ngConf 2021.&nbsp;&nbsp;Prior to the conference, I followed the Angular <a target="_blank" rel="noopener" href="https://ng-girls.gitbook.io/todo-list-tutorial/">To-Do List App tutorial</a> to gain a better understanding of the application that was going to be used during the conference.</li><li>Components were generated to represent individual variables & methods and a To-Do DataService was utilized for saving and managing the to-do list of items.</li><li>My spin of style was added with fun icons, images, and clickable links.</li><li>My source code can be found on GitHub, & the site is hosted on Firebase.</li></ul>',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41',
          iconAlt: 'VS Code Icon'
        },
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
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
          iconAlt: 'Adobe Photoshop Icon'
        },
      ],
      code: 'https://github.com/jenhalv/To-Do-List-Angular-App',
      codeName: 'To-Do-List-Angular-App',
      add: 'I really enjoy the camaraderie of the people that moderate, mentor, and attend the ngGirls workshops, and it motivates me to continue studying and creating fun apps in Angular.&nbsp;&nbsp;I was truly honored to have been offered the chance to mentor for the first time in April 2021 and always look forward to helping anyone in any way possible.&nbsp;&nbsp;In June 2019, I attended my first ngGirls conference & followed this same to do app tutorial.&nbsp;&nbsp;It amazes me how much I have learned since then!',
      addImage: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Projects%2FToDo.jpg?alt=media&token=3cba5e11-f141-4f06-ae02-4e679b0e59b3',
      addImageAlt: 'To-do list image',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_bird.png',
      logoAlt: 'bird',
      title: 'Web Developer',
      subtitle: 'Tour of Backyard Birds',
      subtitleLink: 'https://tour-of-backyard-birds.web.app/home',
      image: 'assets/projects-photos/Project_Bird.png',
      imageAlt: 'Tour of Backyard Birds Website',
      created: 'April 2021',
      content: '<ul><li>Following <a href="https://angular.io/tutorial">John Papa’s Tour of Heroes</a> tutorial, I created a SPA (Single Page Application) using Angular CLI to generate components containing an array of birds & bird data/details and incorporated routing to navigate among the different components.</li><li>String Interpolation data binding was incorporated for read-only data (unchangeable cards on the home page).&nbsp;&nbsp;Two-way data binding was incorporated to allow for editable fields (change the name of the bird).&nbsp;&nbsp;Event data binding provides clickable methods (clear, save, back, etc). I created the \'Reset to Original Name\' button on the <a href="https://tour-of-backyard-birds.web.app/detail/8">bird details</a> page to allow the user to revert the page back to the stored name.</li><li>Media queries were added to ensure responsive layouts.</li></ul>',
      icons: [
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41',
          iconAlt: 'VS Code Icon'
        },
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
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
          iconAlt: 'GitKraken Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
          iconAlt: 'Adobe Photoshop Icon'
        },
      ],
      code: 'https://github.com/jenhalv/Tour-Of-Backyard-Birds-Angular-App',
      codeName: 'Tour-Of-Backyard-Birds-Angular-App',
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_HH.png',
      logoAlt: 'Apple on books classroom favicon',
      title: 'Website Designer',
      subtitle: 'Mrs. Halvorson\'s Home',
      subtitleLink: 'https://halvorsonshome.weebly.com/',
      image: 'assets/projects-photos/Project_HH1.png',
      imageAlt: 'Mrs. Halvorson\'s Classroom Website',
      created: 'August 2013',
      content: 'Using a template from Weebly, I embellished <a href="https://halvorsonshome.weebly.com/">Mrs. Halvorson’s Home</a>, a website to use daily in my kindergarten classroom that has easy-to-use tabs with custom educational pictures for my students.&nbsp;&nbsp;HTML was implemented to image source the child-friendly pictures saved within my site and a link source directed the user to other supplemental educational websites.&nbsp;&nbsp;CSS was used to make image-specific borders and sizes to help the site look clean and user-friendly.',
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
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
          iconAlt: 'Adobe Photoshop Icon'
        },
      ],
      closed: false
    },
    {
      logo: 'assets/projects-photos/favicon_PIF.png',
      logoAlt: 'Pictures in Focus favicon',
      projectId: 'pictures',
      title: 'Website Designer',
      subtitle: 'Pictures in Focus',
      subtitleLink: 'http://picturesinfocus.weebly.com/',
      image: 'assets/projects-photos/Project_PIF1.png',
      imageAlt: 'Pictures in Focus Website',
      created: 'September 2004',
      content: 'In 2004, I built my own photography business and personalized a small Weebly template to showcase a few of my favorite wedding & engagement pictures.  The site is straightforward and basic (I do not take pictures anymore professionally - just fun candid photos of kids, cats, and birds!).',
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
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
          iconAlt: 'Adobe Photoshop Icon'
        },
        {
          iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FLightroom_Icon.png?alt=media&token=960f71ab-8b35-4b72-bc2e-06849e408557',
          iconAlt: 'Adobe Lightroom Icon'
        },
      ],
      closed: false
    },
  ];

  constructor( router: Router,
               private route: ActivatedRoute, ) {
   }

  ngOnInit(): void {
  }
}
