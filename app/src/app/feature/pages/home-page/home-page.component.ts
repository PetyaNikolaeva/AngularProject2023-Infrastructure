import { Component, OnInit } from '@angular/core';
import { getUserData } from 'src/app/auth/util';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
    if (getUserData()) {
      this.authService.isLogged = true;
    }
  }

}
