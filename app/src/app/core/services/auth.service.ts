import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/IUser';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  public currentUser: IUser| null = null;


  get isLogged() {
    return !!this.currentUser;
  }


  register(userData: {email: string, password: string, username: string, companyInfo:string, logo:string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/register`, userData)
    .pipe(tap(user => {
      localStorage.setItem('email', user.email);
      localStorage.setItem('accessToken', user.accessToken);
      localStorage.setItem('username', user.username);
      localStorage.setItem('companyInfo', user.companyInfo);
      localStorage.setItem('logo', user.logo);
      localStorage.setItem('_id', user._id);
      this.currentUser = user
    }));
  }

  login(userData: {email: string, password: string}): Observable<IUser> {
    return this.httpClient.post<IUser>(`${environment.apiUrl}/users/login`, userData)
    .pipe(tap(user => {
      sessionStorage.setItem('email', user.email);
      sessionStorage.setItem('accessToken', user.accessToken);
      sessionStorage.setItem('_id', user._id);
      this.currentUser = user
    }));
  }

  logout() { 
    this.currentUser = null;
    return this.httpClient.get(`${environment.apiUrl}/users/logout`)
    
  }

  getProfile() {
    const token = sessionStorage.getItem('accessToken');

    if (token) {
      return this.httpClient.get<IUser>(`${apiUrl}/users/me`,{ headers: new HttpHeaders({ 'X-Authorization': token }) })
    } else {
      return this.httpClient.get<IUser>(`${apiUrl}/users/me`)
    }
  }
}

