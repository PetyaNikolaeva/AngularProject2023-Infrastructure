import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/projects.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ] 
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders<SharedModule> {
  return {
    ngModule: SharedModule,
    providers: [
      AuthService,
      PostsService
    ]
  }
}}
