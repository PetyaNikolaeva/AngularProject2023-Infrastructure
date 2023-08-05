import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { clearUserData, getUserData} from 'src/app/auth/util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  get isLogged(): boolean {
    return this.authService.isLogged;
  }
constructor(private authService: AuthService, private router: Router) { }
 
  logoutHandler(): void {
    this.authService.logout().subscribe(data => console.log(data))
        clearUserData()
        this.authService.setLoginInfo(null, false)
        this.router.navigate([`/home`]);
      }

      ngOnInit(): void {
        if (getUserData().accessToken) {
          this.authService.isLogged = true;
        }
      }

  }
 