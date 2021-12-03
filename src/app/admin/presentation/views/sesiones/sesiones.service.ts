import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sesiones } from './sesiones';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/sesion'
  constructor(private http: HttpClient, private router: Router) { }
  getSesiones(): Observable<Sesiones[]> {
    return this.http.get<Sesiones[]>(this.urlEndPoint + '/all')
  }
}
