import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  SKILLS = [
    {
      title: 'HTML',
      value: 100,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FHTML_B.png?alt=media&token=cfb4bc18-f0cf-4651-b010-43cf2deea19a',
      iconAlt: 'HTML Icon'
    },
    {
      title: 'CSS/SCSS/SASS',
      value: 100,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FCSS.png?alt=media&token=00e06da8-1624-4c5c-8d6c-c2177f09c908',
      iconAlt: 'CSS Icon'
    },
    // {
    //   title: 'SASS',
    //   value: 100,
    // tslint:disable-next-line: max-line-length
    //   iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FSASS_Icon.png?alt=media&token=c2a1a0bb-6c6a-4bb7-87cf-64be55502496',
    //   iconAlt: 'SASS Icon'
    // },
    {
      title: 'Angular',
      value: 66,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FAngular_Icon.png?alt=media&token=3661bf7e-3163-4681-8c00-d81885a0c69c',
      iconAlt: 'Angular Icon'
    },
    {
      title: 'Visual Studio Code',
      value: 66,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FVSC_Icon.png?alt=media&token=03301415-c81d-4cd0-b682-a525434d3c41',
      iconAlt: 'VS Code Icon'
    },
    {
      title: 'Git/GitHub/GitKraken',
      value: 66,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Fgit.png?alt=media&token=1991638f-3019-44fd-988e-72760a454844'
    },
    // {
    //   title: 'Stackblitz',
    //   value: 66,
    // tslint:disable-next-line: max-line-length
    //   iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fstackblitz.png?alt=media&token=42e19877-20cf-4a76-9fa9-b74923bc72a7',
    //   iconAlt: 'Stackblitz Icon'
    // },
    {
      title: 'Typescript',
      value: 33,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2FTS_Icon.png?alt=media&token=34c1eb01-893d-486b-adef-77f328a7d2d7',
      iconAlt: 'Typescript Icon'
    },
    {
      title: 'Firebase',
      value: 33,
      iconUrl: 'https://firebasestorage.googleapis.com/v0/b/jen-s-pictures.appspot.com/o/Logo%20Icons%20-%20experience%2Ffirebase_logo.png?alt=media&token=1dd8f086-db60-4b9b-ae3c-0186728f7247',
      iconAlt: 'Firebase Icon'
    },
    // {
    //   title: 'Weebly',
    //   value: 100,
    // tslint:disable-next-line: max-line-length
    //   iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2FweeblyW.png?alt=media&token=42ce457e-1afb-4ff7-8860-2f5181e2c95d',
    //   iconAlt: 'Weebly Icon'
    // },
    // {
    //   title: 'Adobe Photoshop',
    //   value: 100,
    // tslint:disable-next-line: max-line-length
    //   iconUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-jenhalvorson.appspot.com/o/Icons%2Fphotoshop_icon.png?alt=media&token=29486841-07eb-44da-a295-7d7e23a10c21',
    //   iconAlt: 'Adobe Photoshop Icon'
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
