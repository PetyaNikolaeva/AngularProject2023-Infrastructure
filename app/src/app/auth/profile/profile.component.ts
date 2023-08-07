import { Component, Input, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/projects.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IProjects } from 'src/app/core/interfaces/IProjects'; 
import { getUserData } from '../util';
import { ActivatedRoute, Router } from '@angular/router'; 
import { trigger,transition, style, animate, animation } from '@angular/animations'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('ComeFromLeft',[
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]) 
    ])
  ]
})
export class ProfileComponent implements OnInit{
  username: string = '';
  email: string = '';
  userId: string = '';
  companyInfo: string = '';
  logo: string = ''; 
  
  ownerID = getUserData()._id
  isBtnHidden:boolean = false;

  projects: IProjects[] =[]
  errors:  | undefined = undefined;

  constructor(private authService: AuthService, 
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute) {}

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
          console.log(err)
          this.errors = err.error.message;
        }
    
    });

    const user = getUserData()
    const userId= user._id;

      this.postsService.getUserProjects(userId).subscribe({
        next: (response) => {
          this.projects = response;

        },
        error: (err) => {
          this.errors = err.error.message;
        }
      });

      this.ownerID= userId
      const isHidden = localStorage.getItem(`btnHidden${this.ownerID}`)
      if(isHidden === 'true'){
        this.isBtnHidden = true
      }  
   }



    addCompanyInfo():void {  
        
      const id = this.activatedRoute.snapshot.params['id'];
         
        const username = getUserData().username
        const logo = getUserData().logo
        const companyInfo = getUserData().companyInfo
    
         
          const data = {ownerId: id, username: username, logo: logo, companyInfo: companyInfo}
          this.postsService.addLeader(data).subscribe((response) => {
            console.log('Post request is succesful!', response)
          })


          this.ownerID = getUserData()._id

          this.isBtnHidden = true;
          localStorage.setItem(`btnHidden${this.ownerID}`, 'true')
  
    }
  }


