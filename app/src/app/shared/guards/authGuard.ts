import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
     private router: Router ){}
     
  
     canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      const isAuthenticated = this.authService.isLogged
      const redirectUser = () => this.router.navigate(['/home']);
      const redirectUserLogin = () => this.router.navigate(['/login']);
      switch (state.url) {
          case '/profile': if (!isAuthenticated) redirectUserLogin();
              break;
  
          case '/login': if (isAuthenticated) redirectUser();
              break;
  
          case '/register': if (isAuthenticated) redirectUser();
              break;
  
          case '/logout': if (!isAuthenticated) redirectUser();
              break;
  
          case '/projects/add-project': if (!isAuthenticated) redirectUserLogin();
              break;
            case `/projects/edit/${route.params['id']}`:if (!isAuthenticated) redirectUserLogin();
            break;
              

      }
  
      return true;
  }
  }