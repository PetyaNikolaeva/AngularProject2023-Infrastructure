import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectListComponent } from './project-page/project-list.component';
import { ProjectListItemDetailsComponent } from './project-list-item-details/project-list-item-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { RouterModule } from '@angular/router';
import { ProjectRoutingModule } from './projects-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadersComponent } from './leaders/leaders.component';


@NgModule({
  declarations: [
    AddProjectComponent,
    ProjectListComponent, 
    ProjectListItemDetailsComponent,
    EditProjectComponent,
    LeadersComponent
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
