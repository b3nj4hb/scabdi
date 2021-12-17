import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'https://scabdi.herokuapp.com/api/persona'
  private urlsocio: string = 'https://scabdi.herokuapp.com/api/socio'

  constructor(private http: HttpClient, private router: Router) { }
  
  // procedimiento josue
  getSocios(id:number): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.urlEndPoint}/listarpersona/${id}`)
  }
  
  // reporte socio
  getSocio(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlsocio}/socio`)
  }

  getDatos(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlsocio}/datos/${id}`)
  }
  getModulos(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlsocio}/modulos/${id}`)
  }
  getPedidos(id:number): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlsocio}/pedidos/${id}`)
  }
}
