import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
