import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/shared/services/projects.service';
import { IProjects } from 'src/app/shared/interfaces/IProjects';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  errors:  | undefined = undefined;
  URL_PATTERN = /^https?:/
  project: IProjects | null = null; 

  editFormGroup: FormGroup = this.formBuilder.group({
    'projectName': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'contractor': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'release': new FormControl('', [Validators.required, Validators.max(2023), Validators.min(1970)]),
    'location': new FormControl('', [Validators.required, Validators.minLength(1)]),
    'description': new FormControl('', [Validators.required, Validators.minLength(10)]),
    'imageUrl1': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
    'imageUrl2': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
    'imageUrl3': new FormControl('', [Validators.required, Validators.pattern(this.URL_PATTERN)]),
  })

  constructor(
    private formBuilder: FormBuilder, 
    private postsService: PostsService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
    
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    this.postsService.getDetails(id).subscribe(data => {
     this.editFormGroup.patchValue({ projectName: data.projectName });
     this.editFormGroup.patchValue({ contractor: data.contractor });
     this.editFormGroup.patchValue({ release: data.release });
     this.editFormGroup.patchValue({ location: data.location });
     this.editFormGroup.patchValue({ description: data.description });
     this.editFormGroup.patchValue({ imageUrl1: data.imageUrl1 });
     this.editFormGroup.patchValue({ imageUrl2: data.imageUrl2 });
     this.editFormGroup.patchValue({ imageUrl3: data.imageUrl3 });
     this.project = data;
   })

 }

 createHandler(): void {

   const id = this.activatedRoute.snapshot.params['id'];
   this.postsService.editProject(id, this.editFormGroup.value).subscribe({
     next: (project) => {
       console.log(project)
       //this.router.navigate([`/projects/${project._id}`])
     },
     error: (err) => {
       this.errors = err.error.message;
     }
   })
 }
}
