import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-page/project-list.component';
import { ProjectListItemDetailsComponent } from './project-list-item-details/project-list-item-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { RouterModule } from '@angular/router'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { ProjectRoutingModule } from './projects-routing.module';


@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent, 
    ProjectListItemDetailsComponent,
    EditProjectComponent 
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule

  ]
})
export class ProjectsModule { }
