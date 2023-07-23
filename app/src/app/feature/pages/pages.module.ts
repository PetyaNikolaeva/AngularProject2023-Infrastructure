import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NewsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
