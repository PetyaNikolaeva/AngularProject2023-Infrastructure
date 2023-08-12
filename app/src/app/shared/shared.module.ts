import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/projects.service';
 

@NgModule({
  declarations: [], 
  imports: [
    CommonModule
  ], 
  providers: [
    AuthService,
    PostsService,
    
  ],
})
export class SharedModule { 
}
