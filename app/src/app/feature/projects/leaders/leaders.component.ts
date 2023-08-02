import { Component, OnInit } from '@angular/core';
import { ILeaders } from 'src/app/core/interfaces/ILeaders';
import { PostsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
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
