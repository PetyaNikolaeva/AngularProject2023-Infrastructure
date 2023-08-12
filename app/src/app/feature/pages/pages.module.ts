import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LeadersComponent } from './leaders/leaders.component';
import { PagesRoutingModule } from './pages-routing.module'; 
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NewsPageComponent,
    LeadersComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
