import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';

import { Router, RouterModule } from '@angular/router';
import { PagesModule } from './feature/pages/pages.module';
import { ProjectsModule } from './feature/projects/projects.module';
import { SharedModule } from './shared/shared.module';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    CoreModule,
    HttpClientModule, 
    AuthModule,
    ProjectsModule,
    PagesModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
