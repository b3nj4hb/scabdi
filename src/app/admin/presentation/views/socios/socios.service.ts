import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Socio } from './socios';

@Injectable({
  providedIn: 'root'
})
export class SociosService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/socio'
  constructor(private http: HttpClient, private router: Router) { }
  getSocios(): Observable<any[]> {
    return this.http.get<any[]>(this.urlEndPoint + '/all');
  }
}
