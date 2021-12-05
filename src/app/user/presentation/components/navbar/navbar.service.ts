import { Recurso } from './recurso';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recursos } from 'src/app/admin/presentation/components/sesiones/sesiones-tabla/recursos';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/sesion'
  private url: string = 'http://localhost:9292/api/recurso'
  constructor(private http: HttpClient, private router: Router) { }

  getRecurso(id: number): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.urlEndPoint}/recursos/${id}`)
  }
  getRecursos(): Observable<recursos[]> {
    return this.http.get<recursos[]>(this.url + '/all/')
  }
  getlistadorecurso(id: number): Observable<recursos[]> {
    return this.http.get<recursos[]>(`${this.url}/read/${id}`)
  }
}
