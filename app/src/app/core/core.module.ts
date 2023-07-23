import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/projects.service'; 



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    AuthService,
    PostsService
  ]
})
export class CoreModule { }