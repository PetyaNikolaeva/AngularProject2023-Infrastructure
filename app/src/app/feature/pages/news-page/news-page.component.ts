import { Component } from '@angular/core';
import { trigger,transition, style, animate, animation } from '@angular/animations'

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  animations: [
    trigger('ComeFromLeft',[
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]) 
    ])

  ]
})
export class NewsPageComponent {

}


