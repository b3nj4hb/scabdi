import { Injectable } from '@angular/core';
import { Digi2 } from './digi2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Conferencia } from './conferencia';

@Injectable({
  providedIn: 'root'
})
export class SeminariosService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'https://scabdi.herokuapp.com/api/conferencia'
  constructor(private http: HttpClient, private router: Router) { }

  getDigi2(id:number): Observable<Digi2[]> {
    return this.http.get<Digi2[]>(`${this.urlEndPoint}/digi/${id}`)
  }
  getSeminarios(): Observable<Conferencia[]> {
    return this.http.get<Conferencia[]>(this.urlEndPoint + '/all')
  }
}
