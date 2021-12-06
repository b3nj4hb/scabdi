import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/user/presentation/views/pedidos-oracion/persona';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  httpOptions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint: string = 'http://localhost:9292/api/persona'
  constructor(private http: HttpClient, private router: Router) { }
  getSocios(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlEndPoint + '/listarpersona')
  }
  
}
