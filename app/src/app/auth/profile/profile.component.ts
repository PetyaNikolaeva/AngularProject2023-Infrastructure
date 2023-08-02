import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/projects.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IProjects } from 'src/app/core/interfaces/IProjects'; 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  username: string = '';
  email: string = '';
  userId: string = '';
  companyInfo: string = '';
  logo: string = '';

  
  projects: IProjects[] =[]
  errorMessage:  | undefined = undefined;

  constructor(private authService: AuthService, private postsService: PostsService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (response) => {
        this.username = response.username;
        this.email = response.email;
        this.userId = response._id;
        this.companyInfo = response.companyInfo;
        this.logo = response.logo;
      },

        error: (err) => {
          this.errorMessage = err.error.message;
        }
    
    });

    const userId = sessionStorage.getItem('_id');
    
      this.postsService.getUserProjects(userId).subscribe({
        next: (response) => {
          this.projects = response;
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    }
  }


