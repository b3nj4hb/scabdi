import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recurso } from './recurso';
import { Sesion } from './sesion';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'https://scabdi.herokuapp.com/api/sesion'
  constructor(private http: HttpClient, private router: Router) { }

  getSesiones(): Observable<Sesion[]> {
    return this.http.get<Sesion[]>(this.urlEndPoint + '/listar');
  }
  getRecursos(id:number): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.urlEndPoint}/recursos/${id}`)
  }
}
