import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { clearUserData, getUserData} from 'src/app/auth/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  get isLogged(): boolean {
    return this.authService.isLogged;
  }
constructor(private authService: AuthService, private router: Router) { }
 
  logoutHandler(): void {
    this.authService.logout()
    this.router.navigate([`/home`]);
      }

      ngOnInit(): void {
        if (getUserData()) {
          this.authService.isLogged = true;
        }
      }

  }
 