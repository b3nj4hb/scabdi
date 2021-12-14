import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Banco } from '../../../views/socios/banco';

@Injectable({
  providedIn: 'root'
})
export class AsignarService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private banco: string = 'https://scabdi.herokuapp.com/api/bancocomunal'
  constructor(private http: HttpClient, private router: Router) { }
  getBanco(): Observable<Banco[]> {
    return this.http.get<Banco[]>(this.banco + '/all');
  }
}
