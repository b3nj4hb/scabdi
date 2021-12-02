import { Recurso } from './recurso';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/sesion'
  constructor(private http: HttpClient, private router: Router) { }

  getRecurso(id:number): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.urlEndPoint}/recursos/${id}`)
  }
}
