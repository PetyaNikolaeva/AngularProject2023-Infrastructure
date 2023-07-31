import { Component, OnInit} from '@angular/core';
import { PostsService } from 'src/app/core/services/projects.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IProjects } from 'src/app/core/interfaces/IProjects';
import { IUser } from 'src/app/core/interfaces/IUser';
@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent implements OnInit{
  projects: IProjects[] =[]
  errorMessage:  | undefined = undefined;
  constructor(private authService: AuthService, private postsService: PostsService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('userId');
    
      this.postsService.getUserProjects(user).subscribe({
        next: (response) => {
          this.projects = response;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
  }

