import { Injectable } from '@angular/core';
import { Modulos } from './modulos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Modulosporbanco } from '../../components/modulos/modulos-tabla/modulosporbanco';

@Injectable({
  providedIn: 'root'
})
export class ModulosService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/modulo'
  constructor(private http: HttpClient, private router: Router) { }
  getModulos(): Observable<Modulos[]> {
    return this.http.get<Modulos[]>(this.urlEndPoint + '/all');
  }
  getModulosPorBanco(): Observable<Modulosporbanco[]> {
    return this.http.get<Modulosporbanco[]>(this.urlEndPoint + '/modulosporbanco');
  }
}
