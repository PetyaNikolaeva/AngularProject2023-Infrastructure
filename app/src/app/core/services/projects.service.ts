import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjects } from '../interfaces/IProjects';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service'; 
import { ILeaders } from '../interfaces/ILeaders'; 
import { ILike } from '../interfaces/ILike';
import { getUserData } from 'src/app/auth/util';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, 
    private authService: AuthService) { }

  loadProjectList(): Observable<IProjects[]> {
    return this.http.get<IProjects[]>(`${apiUrl}/data/albums`);
  }

  getUserProjects(ownerId: string | null): Observable<IProjects[]> {
    return this.http.get<IProjects[]>(
      `${apiUrl}/data/albums?where=_ownerId%3D%22${ownerId}%22`
    );
  }

  addProject(data: IProjects): Observable<IProjects> {
    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);

    return this.http.post<IProjects>(`${apiUrl}/data/albums`, data, { headers:headers })

  }
  getDetails(id: string): Observable<IProjects> {
    return this.http.get<IProjects>(`${apiUrl}/data/albums/${id}`);
  }

  editProject(id: string, data: IProjects): Observable<IProjects> {
    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);

    return this.http.put<IProjects>(`${apiUrl}/data/albums/${id}`, data, { headers:headers })

  }

  removeProject(id: string) {

    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);
   
    return this.http.delete(`${apiUrl}/data/albums/${id}`, { headers:headers });

  }
  loadLeaders(): Observable<ILeaders[]> {
    return this.http.get<ILeaders[]>(`${apiUrl}/data/leaders`);
  }

  addLeader(data: ILeaders): Observable<ILeaders> {
    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);
   
    return this.http.post<ILeaders>(`${apiUrl}/data/leaders`, data, { headers:headers })

  }

  createLike(albumId: string): Observable<ILike> {
    
    const token = getUserData().accessToken
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('X-Authorization', '' + token);

    return this.http.post<ILike>(`${apiUrl}/data/likes`, {albumId}, { headers:headers })

  }

  getLike(id: string) {
    return this.http.get<number>(`${apiUrl}/data/likes?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
  }

  /*
  likesPerUser(id: string, userId: string) {
    return this.http.get<ILike>(`${apiUrl}/data/likes?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);
  }
  */
}
