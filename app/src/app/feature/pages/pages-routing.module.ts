import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { LeadersComponent } from './leaders/leaders.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes:Routes = [
  {
      path:"",
      pathMatch: 'full',
      component: HomePageComponent
  },
  {
      path:"news",
      component: NewsPageComponent
  },
  {
    //canActivate: [AuthGuard],
    path:"leaders",
    component: LeadersComponent
},
{
  path:"**",
  component: NotFoundComponent
}

]

export const PagesRoutingModule = RouterModule.forChild(routes)