import { Recurso } from './recurso';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sesionactiva } from './sesionactiva';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'https://scabdi.herokuapp.com/api/sesion'
  constructor(private http: HttpClient, private router: Router) { }

  getRecurso(id:number): Observable<Recurso[]> {
    return this.http.get<Recurso[]>(`${this.urlEndPoint}/listarecursos/${id}`)
  }
  getSesionActiva(id:number):Observable<Sesionactiva[]>{
    return this.http.get<Sesionactiva[]>(`${this.urlEndPoint}/sesionactiva/${id}`)
  }
  // getIdPersona(id:number): Observable<any[]>{
  //   return this.http.get<any[]>(`${this.urlEndPoint}/idpersona/${id}`)
  // }
}
