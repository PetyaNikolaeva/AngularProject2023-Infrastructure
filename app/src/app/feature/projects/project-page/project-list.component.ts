import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Form } from '@angular/forms';
import { IProjects } from 'src/app/core/interfaces/IProjects';
import { PostsService } from 'src/app/core/services/projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit{ 
  projects: IProjects[] | null = null;
  searchProject: IProjects[] = []; 
  hasSearch: boolean = false;
  errors:  | undefined = undefined;
  
  searchFormGroup: FormGroup = this.formBuilder.group({
    'search': new FormControl('')
  })

  constructor(private postsService: PostsService, 
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

 searchHandler() {
  const { search } = this.searchFormGroup.value
    const  string  = this.searchFormGroup.value 
    this.hasSearch = true
    this.searchProject = []
    if (string.search == '') {
      this.hasSearch = false
    } else {
      console.log(string.search);

      this.projects?.map((x) => {
        if (x.location.toLowerCase().includes(string.search.toLowerCase())) {
          this.searchProject.push(x)
        }
      })  
      this.hasSearch = true
    }
  }

  ngOnInit(): void {
    this.hasSearch = false
    this.postsService.loadProjectList().subscribe({
      next: (projects) => {
        this.projects = projects
        
      },
      error: (err) => {
        this.errors = err.error.message;
        this.router.navigate(['/'])

      }
    })

}
}

