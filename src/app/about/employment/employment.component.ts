import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements OnInit {
  JOBS = [
    {
    title: 'QA Tech<br>Front End Developer<br>Blog Content Manager<br>Social Media Marketer',
    description: '<ul><li>Assists in designing, maintaining, and testing efficient, reusable, & reliable code.</li><li>Develops additional components as needed with routing using Angular CLI.</li><li>Implements Google\'s Material Design specifications to ensure the best practices of user interface design.</li><li>Creates responsive layouts with the use of media queries, flexbox, and Angular\'s Material UI Library.</li><li>Researches and writes articles pertaining to outdoor adventures for the Adventure Spotlight component.</li><li>Updates social media platforms promoting Arvid Outdoors and outdoor guided adventures.</li></ul>',
    company: 'Arvid Outdoors, LLC',
    dates: '2018 - Present',
    },
    {
    title: 'Kindergarten, First, & Second Grade Teacher<br>Substitute Teacher<br>Curriculum Writer<br>Teacher Associate',
    description: '<ul><li>Promoted student achievement, provided rigorous & applicable instruction, and maintained a learning-conducive environment.</li><li>Developed grade-level curriculum & presented district-wide curriculum workshops.</li><li>Created a personal classroom website and assisted other teachers with website elements, such as creating a blog or adding clickable links.</li><li>Collaborated with teachers & administration and communicated effectively with parents/guardians.</li></ul>',
    company: 'Rich Hill School District<br>Ray-Pec School District<br>Olathe School District<br>Joplin School District',
    dates: '2001 - Present (Substitute Only)',
    },
  ];

constructor() { }

ngOnInit(): void {
}
}
