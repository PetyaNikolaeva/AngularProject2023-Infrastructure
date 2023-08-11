import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { LeadersComponent } from './leaders/leaders.component';



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
]

export const PagesRoutingModule = RouterModule.forChild(routes)