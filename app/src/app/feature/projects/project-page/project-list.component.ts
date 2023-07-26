import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IProjects } from 'src/app/core/interfaces/IProjects';
import { PostsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{


  projects: IProjects[] | null = null;


  constructor(private postsService: PostsService) { }



  ngOnInit(): void {
    this.postsService.loadProjectList().subscribe(projectList => {
        this.projects = projectList;
    })

}
}

