import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService
    ) { }
  ngOnInit(): void {
    this.authService.currentUser = null;
    localStorage.removeItem('user')
    this.router.navigate(['/home']);
  }

}