import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListItemComponent } from './project-list-item/project-list-item.component';
import { ProjectListItemDetailsComponent } from './project-list-item-details/project-list-item-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';



@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectListItemDetailsComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
