import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/core/services/projects.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  errorMessage:  | undefined = undefined;
  URL_PATTERN = /^https?:\/\/.+/i


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
   const { projectName, contractor, release, location, description, imageUrl1, imageUrl2, imageUrl3 } = this.createFormGroup.value

    this.postsService.addProject(this.createFormGroup.value).subscribe({
      next: (project) => {
        if (!project) { return }
        this.router.navigate(['/projects']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }

}
