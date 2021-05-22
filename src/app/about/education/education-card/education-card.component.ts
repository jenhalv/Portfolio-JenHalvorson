import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent implements OnInit {
  CARDS = [
    {
      image: 'assets/education-icons/ngGirls.png',
      imageAlt: 'ngGirls',
      website: 'https://workshops.ng-girls.org/',
      },
    {
      image: 'assets/education-icons/KCWIT1.png',
      imageAlt: 'Kansas City Women in Tech',
      website: 'https://kcwomenintech.org/',
      },
    {
      image: 'assets/education-icons/CodeA.png',
      imageAlt: 'Codecademy',
      website: 'https://www.codecademy.com/',
      },
    // {
    //   image: 'assets/education-icons/FCC.png',
    //   imageAlt: 'Free Code Camp',
    //   website: 'https://www.freecodecamp.org/',
    //   },
    {
      image: 'assets/education-icons/PS.png',
      imageAlt: 'PluralSight',
      website: 'https://www.pluralsight.com/'
      },
    // {
    //   image: 'assets/education-icons/UD.png',
    //   imageAlt: 'Udemy',
    //   website: 'https://www.udemy.com/'
    //   },
    {
      image: 'assets/education-icons/KCDC.png',
      imageAlt: 'Kansas City Developers Conference 2019',
      website: 'https://kcdc2019.myconf.app/',
      },
    {
      image: 'assets/education-icons/CA.png',
      imageAlt: 'Claim Academy',
      website: 'https://claimacademystl.com/',
      },
];

  constructor() { }

  ngOnInit(): void {
  }

}
