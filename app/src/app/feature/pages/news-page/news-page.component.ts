import { Component } from '@angular/core';
import { trigger,transition, style, animate, animation } from '@angular/animations'

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  animations: [
    trigger('fadeInOutAnimation',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms', style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:0}),
        animate('1000ms', style({opacity:0}))
      ])
    ])

  ]
})
export class NewsPageComponent {

}


