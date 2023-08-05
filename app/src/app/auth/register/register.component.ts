import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { passwordMatch } from '../passwordMatch';
import { PostsService } from 'src/app/core/services/projects.service';
import { ILeaders } from 'src/app/core/interfaces/ILeaders';
import { getUserData, setUserData } from '../util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    
    pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'
    passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)])
 
    
    registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMatch(this.passwordControl)]),
    'logo': new FormControl(''),
    'companyInfo': new FormControl('')
  })


  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private postsService: PostsService) { }

  errors: string | undefined = undefined
  hasSameEmail:boolean = false;

  registerHandler(): void {

    this.authService.register(this.registerFormGroup.value).subscribe({
      next: (userData) => {
        setUserData(userData)
        this.authService.setLoginInfo(userData, true)
        this.registerFormGroup.reset();
        this.router.navigate([`/home`]);
      },
      complete: () => {
        this.errors = ''
        this.hasSameEmail = false;
        console.log('register completed'); 
    },
      error: (err) => {
        let message = err.error.error;
        if (message === 'Account already exists for this email address.'){
          console.log('email here');
          this.hasSameEmail = true
        } 
        this.errors = message;
        console.log(message, this.hasSameEmail);
      }
    })

   
    const username = getUserData().username
    const logo = getUserData().logo
    const companyInfo = getUserData().companyInfo

    if(username && logo && companyInfo) {
      const data = {username: username, logo: logo, companyInfo: companyInfo}
      this.postsService.addLeader(data).subscribe((response) => {
        console.log('Post request is succesful!', response)
      })
    } else {
      console.warn('No username!')
    }
  
  }



}