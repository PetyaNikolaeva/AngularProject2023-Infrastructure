import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './feature/pages/home-page/home-page.component';
import { NewsPageComponent } from './feature/pages/news-page/news-page.component';
import { AuthGuard } from './core/guards/authGuard';

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
    path: 'news',
    component: NewsPageComponent
},
{
  path: 'projects',
  loadChildren: () => import('./feature/projects/projects.module').then(m => m.ProjectsModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
