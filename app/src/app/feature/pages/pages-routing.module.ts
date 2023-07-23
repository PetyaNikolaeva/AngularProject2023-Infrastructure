import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';



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
]

export const PagesRoutingModule = RouterModule.forChild(routes)