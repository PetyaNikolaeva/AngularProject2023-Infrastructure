import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { passwordMatch } from '../passwordMatch';

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
    'password': this.passwordControl,
    'repass': new FormControl(null, [passwordMatch(this.passwordControl)]),
  })


  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  errors: string | undefined = undefined
  hasSameEmail:boolean = false;

  registerHandler(): void {

    this.authService.register(this.registerFormGroup.value).subscribe({
      next: () => {
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
  }

}