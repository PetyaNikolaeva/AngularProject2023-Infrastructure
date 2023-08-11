import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
 

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
},
{
  path: 'projects',
  loadChildren: () => import('./feature/projects/projects.module').then(m => m.ProjectsModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
