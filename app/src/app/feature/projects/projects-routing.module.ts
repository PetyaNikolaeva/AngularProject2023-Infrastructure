import { RouterModule, Routes } from "@angular/router";
import { AddProjectComponent } from "./add-project/add-project.component";
import { EditProjectComponent } from "./edit-project/edit-project.component";
import { ProjectListComponent } from "./project-page/project-list.component";
import { ProjectListItemDetailsComponent } from "./project-list-item-details/project-list-item-details.component";
import { AuthGuard } from "src/app/shared/guards/authGuard";




const routes:Routes = [
   
    {    path:"",
         pathMatch: 'full',
        component: ProjectListComponent
    },

    {
        path:"projects/details/:id",
        component: ProjectListItemDetailsComponent
    },
    {
        canActivate: [AuthGuard],
        path:"projects/edit/:id",
        component: EditProjectComponent
    },
    {
        canActivate: [AuthGuard],
        path:"projects/add-project",
        component: AddProjectComponent
    }

];

export const ProjectRoutingModule = RouterModule.forChild(routes)