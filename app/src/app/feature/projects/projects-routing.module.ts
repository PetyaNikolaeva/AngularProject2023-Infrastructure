import { RouterModule, Routes } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { ProjectListComponent } from "./project-page/project-list.component";
import { ProjectListItemDetailsComponent } from "./project-list-item-details/project-list-item-details.component";
import { AuthGuard } from "src/app/core/guards/authGuard";
import { LeadersComponent } from "./leaders/leaders.component";



const routes:Routes = [
    {    path:"",
         pathMatch: 'full',
        component: ProjectListComponent
    },

    {
        path:"details/:id",
        component: ProjectListItemDetailsComponent
    },
    {
        canActivate: [AuthGuard],
        path:"edit/:id",
        component: EditProjectComponent
    },
    {
        //canActivate: [AuthGuard],
        path:"add-project",
        component: AddProjectComponent
    },
    {
        //canActivate: [AuthGuard],
        path:"leaders",
        component: LeadersComponent
    },

];

export const ProjectRoutingModule = RouterModule.forChild(routes)