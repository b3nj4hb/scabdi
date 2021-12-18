import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Modulo } from './modulo';
import { Sesion } from './sesion';

@Injectable({
  providedIn: 'root'
})
export class CrearMSService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urls: string = 'https://scabdi.herokuapp.com/api/sesion';
  private urlm: string = 'https://scabdi.herokuapp.com/api/modulo';
  constructor(private http: HttpClient, private router: Router) { }

  crearSesion(post: Sesion): Observable<any> {
    return this.http.post<Sesion>(this.urls + '/create', post, this.httpOptions)
  }
  crearModulo(post: Modulo): Observable<any> {
    return this.http.post<Modulo>(this.urlm + '/create', post, this.httpOptions)
  }
}
