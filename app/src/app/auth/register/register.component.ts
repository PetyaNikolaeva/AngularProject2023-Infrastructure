import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { passwordMatch } from '../passwordMatch';
import { setUserData } from '../util';
import { trigger,transition, style, animate} from '@angular/animations'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0.5}),
        animate('1000ms', style({opacity:1}))
      ])
    ])
  ]
})
export class RegisterComponent {
    
    pattern = '^[a-z0-9A-Z\.-]{3,}@[a-z]+\.[a-z]+$'
    passwordControl = new FormControl('', [Validators.required, Validators.minLength(5)])
 
    
    registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMatch(this.passwordControl)]),
    'username': new FormControl('', [Validators.required,  Validators.minLength(3)]),
    'logo': new FormControl(''),
    'companyInfo': new FormControl('')
  })


  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

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
        console.log(err.error.error);
      }
    })

  
    
  
  }



}