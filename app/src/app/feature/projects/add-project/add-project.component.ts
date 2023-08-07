import { Component } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/services/projects.service';
import { trigger,transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  animations: [
    trigger('ComeFromLeft',[
      transition(':enter',[
        style({transform: 'translateX(-100%)'}),
        animate('500ms ease-in', style({transform: 'translateX(0%)'}))
      ]) 
    ])
  ]
})
export class AddProjectComponent {

  errors:  | undefined = undefined;
  URL_PATTERN = /^https?:/


  createFormGroup: FormGroup = this.formBuilder.group({
    'projectName': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'contractor': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'release': new FormControl('', [Validators.required, Validators.max(2023), Validators.min(1970)]),
    'location': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(10)]),
    'imageUrl1': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
    'imageUrl2': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
    'imageUrl3': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
  })
  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router:Router) {

  }


  handleCreateProject():void {

    this.postsService.addProject(this.createFormGroup.value).subscribe({
      next: (project) => {
        if (!project) { return }
        this.router.navigate(['/projects']);
      },
      error: (err) => {
        this.errors = err.error.message;
      }
    })
  }

}
