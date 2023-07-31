import { Component, OnInit } from '@angular/core';
import { IProjects } from 'src/app/core/interfaces/IProjects';
import { AuthService } from 'src/app/core/services/auth.service';
import { PostsService } from 'src/app/core/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
@Component({
  selector: 'app-project-list-item-details',
  templateUrl: './project-list-item-details.component.html',
  styleUrls: ['./project-list-item-details.component.css']
})
export class ProjectListItemDetailsComponent implements OnInit{

  project: IProjects | null = null;
  isOwner: boolean = false;
  isLoggedIn: boolean = this.authService.isLogged;
  currentUser = this.authService.currentUser;
  canLike: boolean = true;
  errorMessage:  | undefined = undefined;


  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private authService: AuthService,
    private router: Router
  ) { }  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
   

      this.postsService.getDetails(id).subscribe((project) => {
        this.project = project
        if (this.project._ownerId === this.currentUser?._id) {
          this.isOwner = true;
        }
        ;});

       /* this.postsService.getLike(id).subscribe((count) => {
            this.likesCount = count;
          },
          (error) => {
            console.error('0')
          }
          
        )
*/

  }

  deleteProject() {
    const confirmation = window.confirm('Are you sure you want to delete this project?');
   
   if(confirmation){
    const id = this.activatedRoute.snapshot.params['id'];
      this.postsService.removeProject(id).subscribe((result) => {
        console.log(result)
        this.router.navigate(['/projects']);
      });
    }else {
      this.router.navigate(['/projects']);
    }


  }
}
/*

  likeProject() {
    if (this.project.likes.includes(this.currentUser?._id)) {
      this.canLike = false;
      return;
    }

*/