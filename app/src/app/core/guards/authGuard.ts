import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuthenticated = this.authService.isLogged
    const redirectUser = () => this.router.navigate(['/home']);

    switch (state.url) {
        case '/profile': if (!isAuthenticated) redirectUser();
            break;

        case '/login': if (isAuthenticated) redirectUser();
            break;


        case '/register': if (isAuthenticated) redirectUser();
            break;

        case '/logout': if (!isAuthenticated) redirectUser();
            break;

        case '/add-project': if (!isAuthenticated) redirectUser();
            break;
        case '/my-projects': if (!isAuthenticated) redirectUser();
            break;

    }

    return true;
}
}