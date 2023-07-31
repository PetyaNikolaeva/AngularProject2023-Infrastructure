import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjects } from '../interfaces/IProjects';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { LocalizedString } from '@angular/compiler';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  loadProjectList(): Observable<IProjects[]> {
    return this.http.get<IProjects[]>(`${apiUrl}/data/albums`);
  }

  getUserProjects(id: string | null): Observable<IProjects[]> {
    return this.http.get<IProjects[]>(
      `${apiUrl}/data/albums?where=_ownerId%3D%22${id}%22`
    );
  }

  addProject(data: IProjects): Observable<IProjects> {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });

    return this.http.post<IProjects>(`${apiUrl}/data/albums`, data, { headers })

  }
  getDetails(id: string) {
    return this.http.get<IProjects>(`${apiUrl}/data/albums/${id}`);
  }

  editProject(id: string, data: IProjects): Observable<IProjects> {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });

    return this.http.put<IProjects>(`${apiUrl}/data/albums/${id}`, data, { headers })

  }

  removeProject(id: string) {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });
    return this.http.delete(`${apiUrl}/data/albums/${id}`, { headers });

  }

  createLike(id: string) {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });

    return this.http.post(`${apiUrl}/data/likes`, id, { headers })

  }

  getLike(id: string): Observable<number> {
    return this.http.get<number>(`${apiUrl}/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
  }

  likesPerUser(id: string, userId: string) {
    return this.http.get(`${apiUrl}/data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
  }
}
