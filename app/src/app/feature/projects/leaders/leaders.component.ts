import { Component, OnInit } from '@angular/core';
import { ILeaders } from 'src/app/core/interfaces/ILeaders';
import { PostsService } from 'src/app/core/services/projects.service';
import { trigger,transition, style, animate, animation } from '@angular/animations'

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css'],
  animations: [
    trigger('ComeFromLeft',[
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]) 
    ])
  ]
})
export class LeadersComponent implements OnInit{ 
  leaders: ILeaders[] | null = null;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.loadLeaders().subscribe(leadersList => {
        this.leaders = leadersList;
    })


}
}
