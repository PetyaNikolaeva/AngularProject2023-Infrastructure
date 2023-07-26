import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-page/project-list.component';
import { ProjectListItemComponent } from './my-project-list/project-list-item.component';
import { ProjectListItemDetailsComponent } from './project-list-item-details/project-list-item-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { RouterModule } from '@angular/router';
import { ProjectRoutingModule } from './projects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent,
    ProjectListItemComponent,
    ProjectListItemDetailsComponent,
    EditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ProjectsModule { }
