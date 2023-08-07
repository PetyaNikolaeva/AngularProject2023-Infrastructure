import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from 'src/app/core/services/auth.service';
import { setUserData, clearUserData } from '../util';
import { trigger,transition, style, animate} from '@angular/animations'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0.5}),
        animate('1000ms', style({opacity:1}))
      ])
    ])
  ]
})
export class LoginComponent  {

  pattern = '^[a-z0-9A-Z]{3,}@[a-z]+\.[a-z]+$'

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
    'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined


  handleLogin():void {
    this.authService.login(this.loginFormGroup.value).subscribe({
      next: (userData)=> {
        clearUserData()
        this.authService.setLoginInfo(userData,true)
        setUserData(userData)
        this.router.navigate([`/home`]);
      },
      complete: () => {
        console.log('login completed');
        
      },
      error: (err) => {
        this.errors = err.error.error;
        console.log(err.error.error);
      }
    })
  }
}