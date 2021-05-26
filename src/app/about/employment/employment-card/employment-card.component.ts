import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment-card',
  templateUrl: './employment-card.component.html',
  styleUrls: ['./employment-card.component.scss']
})
export class EmploymentCardComponent implements OnInit {
  JOBS = [
    {
    title: 'SELF-EMPLOYED Freelance<br>Front End Developer<br>QA Tech<br>Blog Content Manager<br>Social Media Marketer',
    description: '<ul><li>Assists in designing, maintaining, and testing efficient, reusable, & reliable code.</li><li>Develops additional components as needed with routing using Angular CLI.</li><li>Implements Google\'s Material Design specifications to ensure the best practices of user interface design.</li><li>Creates responsive layouts with the use of media queries, flexbox, and Angular\'s Material UI Library.</li><li>Researches and writes articles pertaining to outdoor adventures for the Adventure Spotlight component.</li><li>Updates social media platforms promoting Arvid Outdoors and outdoor guided adventures.</li></ul>',
    company: 'Arvid Outdoors, LLC',
    companyLink: 'https://www.arvidoutdoors.com',
    dates: '2018 - Present',
    image: 'assets/projects-photos/Project_AO.png',
    imageAlt: 'Arvid Website Image',
    extra: 'I designed and created the <b>Let\'s Get Social</b>, <b><a href="https://arvidoutdoors.com/participant/about-us">About Us</a></b>, <b><a href="https://arvidoutdoors.com/participant/faq">FAQ</a></b>, & <b><a href="https://arvidoutdoors.com/blog">Adventure Spotlight</a></b> components for this Angular application (written by my husband, Steve Halvorson).&nbsp;&nbsp;My focus has been on testing code, finding & fixing errors, and embellishing the style of the application.&nbsp;&nbsp;I continue updating small changes to the website, writing or including new articles on the Adventure Spotlight blog about outdoor adventures, and promoting the site on social media.&nbsp;&nbsp;Google My Business is updated with posts to improve SEO, Adobe Photoshop is used to edit images and create photo montages, and Adobe Premiere is used to combine images and videos to use for advertisement purposes.&nbsp;&nbsp;GitHub & GitKraken are used to manage and keep track of my branch’s source code (not public) and create pull requests for code review.&nbsp;&nbsp;The app is hosted on Firebase.&nbsp;&nbsp;Working on this application has given me a strong understanding of the entire development process (design, development, and deployment) and some basic back-end experience working with Firebase.&nbsp;&nbsp;I enjoy designing the site to be responsive and love working with the Angular framework.',
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
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844',
        iconAlt: 'GitHub Icon'
      },
      {
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
        iconAlt: 'GitKraken Icon'
      },
      {
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
        iconAlt: 'Adobe Photoshop Icon'
      },
      {
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FPremiere_Icon.png?alt=media&token=1803f314-dd54-4d47-8e09-666468f63199',
        iconAlt: 'Adobe Premiere Icon'
      },
    ],
    },
    {
    title: 'Elementary Grade Teacher<br>Substitute Teacher<br>Curriculum Writer<br>Teacher Associate',
    description: '<ul><li>Promoted student achievement, provided rigorous & applicable instruction, and maintained a learning-conducive environment.</li><li>Developed grade-level curriculum & presented district-wide curriculum workshops.</li><li>Created a personal classroom website and assisted other teachers with website elements, such as creating a blog or adding clickable links.</li><li>Collaborated with teachers & administration and communicated effectively with parents/guardians.</li></ul>',
    company: 'Rich Hill School District<br>Ray-Pec School District<br>Olathe School District<br>Joplin School District',
    companyLink: 0,
    dates: '2001 - Present (Substitute Only)',
    },
    // {
    //   title: 'SELF-EMPLOYED Freelance<br>Front End Developer<br>QA Tech<br>Blog Content Manager<br>Social Media Marketer',
    //   description: '<ul><li>Assists in designing, maintaining, and testing efficient, reusable, & reliable code.</li><li>Develops additional components as needed with routing using Angular CLI.</li><li>Implements Google\'s Material Design specifications to ensure the best practices of user interface design.</li><li>Creates responsive layouts with the use of media queries, flexbox, and Angular\'s Material UI Library.</li><li>Researches and writes articles pertaining to outdoor adventures for the Adventure Spotlight component.</li><li>Updates social media platforms promoting Arvid Outdoors and outdoor guided adventures.</li></ul>',
    //   company: 'Arvid Outdoors, LLC',
    //   companyLink: 'https://www.arvidoutdoors.com',
    //   dates: '2018 - Present',
    //   image: 'assets/projects-photos/Project_AO.png',
    //   imageAlt: 'Arvid Website Image',
    //   extra: 'I designed and coded the <b>Let\'s Get Social</b>, <b><a href="https://arvidoutdoors.com/participant/about-us">About Us</a></b>, <b><a href="https://arvidoutdoors.com/participant/faq">FAQ</a></b>, & <b><a href="https://arvidoutdoors.com/blog">Adventure Spotlight</a></b> components for this Angular application (created & written by my husband, Steve Halvorson).&nbsp;&nbsp;My focus has been on testing code, finding & fixing errors, and embellishing the style of the application.&nbsp;&nbsp;I continue updating small changes to the website, writing or including new articles on the Adventure Spotlight blog about outdoor adventures, and promoting the site on social media.&nbsp;&nbsp;Google My Business is updated with posts to improve SEO, Adobe Photoshop is used to edit images and create photo montages, and Adobe Premiere is used to combine images and videos to use for advertisement purposes.&nbsp;&nbsp;GitHub & GitKraken were used to manage and keep track of my branch’s source code (not public) and create pull requests for code review.&nbsp;&nbsp;The app is hosted on Firebase.&nbsp;&nbsp;Working on this application has given me a strong understanding of the entire development process (design, development, and deployment) and some basic back-end experience working with Firebase.I enjoy ensuring the site is designed to be responsive and adaptive and love working with the Angular framework.',
    //   icons: [
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41',
    //       iconAlt: 'VS Code Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
    //       iconAlt: 'Angular Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
    //       iconAlt: 'HTML Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
    //       iconAlt: 'SASS Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
    //       iconAlt: 'Typescript Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
    //       iconAlt: 'Firebase Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FgitLogo.png?alt=media&token=0d6e1f66-3098-4660-8338-694412989e25',
    //       iconAlt: 'Git Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgitkraken.png?alt=media&token=d3adfa8c-d2c2-49e7-8b83-e00fbafe82dd',
    //       iconAlt: 'GitKraken Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
    //       iconAlt: 'Adobe Photoshop Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FPremiere_Icon.png?alt=media&token=1803f314-dd54-4d47-8e09-666468f63199',
    //       iconAlt: 'Adobe Premiere Icon'
    //     },
    //     {
    //       iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fyoutube.png?alt=media&token=b252d10c-0ff3-4ed1-92f9-4233273e4775',
    //       iconAlt: 'YouTube Icon'
    //     },
    //   ],
    //   code: 'https://github.com/jenhalv/Pauls-Pecans',
    //   codeName: 'Pauls-Pecans',
    //   },
  ];
  constructor() { }

  ngOnInit(): void  {
    }

}
