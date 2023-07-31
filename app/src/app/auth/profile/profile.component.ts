import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/projects.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  username: string = '';
  email: string = '';
  userId: string = '';

  errorMessage:  | undefined = undefined;

  constructor(private authService: AuthService, private postsService: PostsService) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (response) => {
        this.username = response.username;
        this.email = response.email;
        this.userId = response._id;
      },

        error: (err) => {
          this.errorMessage = err.error.message;
        }
    
    });
  }

}
