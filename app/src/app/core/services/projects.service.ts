import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProjects } from '../interfaces/IProjects';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient, private authService: AuthService) {}
 
  loadProjectList$(): Observable<IProjects[]> {
    return this.http.get<IProjects[]>(`${apiUrl}/data/albums?sortBy=_createdOn%20desc`);
  }

 
 

addBook$(data: IProjects): Observable<IProjects> {
  const headers = new HttpHeaders({
    'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
  });

    return this.http.post<IProjects>(`${apiUrl}/data/albums`, data, { headers })

}
   getDetails$(projectId:string): Observable<IProjects> {
     return this.http.get<IProjects>(`${apiUrl}/data/albums/${projectId}`);
   }
 
   editProject$(projectId : string, data : IProjects): Observable<IProjects> {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });

       return this.http.put<IProjects>(`${apiUrl}/data/albums/${projectId}`, data, { headers })

   }
 
   removeProject$(projectId : string) {
    const headers = new HttpHeaders({
      'X-Authorization': this.authService.currentUser?.['accessToken'] || ''
    });
    return this.http.delete(`${apiUrl}/data/albums/${projectId}`, { headers } );
    
  }

 

  }