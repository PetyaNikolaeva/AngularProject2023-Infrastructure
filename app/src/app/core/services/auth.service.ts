import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { clearUserData, getUserData } from 'src/app/auth/util';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!: IUser | null;
  isLogged: boolean = false 


  constructor(private httpClient: HttpClient) { }

  setLoginInfo(user: IUser | null, status: boolean) {
    return (
      this.user = user,
      this.isLogged = status
    );
  }

  register(userData: {email: string, password: string, username: string, companyInfo:string, logo:string}) {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/register`, userData).pipe(tap((response) => {
      if (!response._id) { return }
    }))
  }

  login(userData: {email: string, password: string}) {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/login`, userData).pipe(tap((response) => {
      if (!response._id) { return }
  }))
  }
  
  logout() { 
    if(!getUserData()){return}
    clearUserData()
    this.setLoginInfo(null, false)
    
  }


  getProfile() {
    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);

    if (token) {
      return this.httpClient.get<IUser>(`${apiUrl}/users/me`,{ headers: headers })
    } else {
      return this.httpClient.get<IUser>(`${apiUrl}/users/me`)
    }
  }
}

