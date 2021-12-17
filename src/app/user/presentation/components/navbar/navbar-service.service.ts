import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedidos } from './pedidos-oracion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarServiceService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private urlpost: string = 'https://scabdi.herokuapp.com/api/pedido';
  constructor(private http: HttpClient, private router: Router) { }
  create(post: Pedidos): Observable<any> {

    return this.http.post<Pedidos>(this.urlpost + '/create', post, this.httpOptions);

  }
  idpersona() {
    // sessionStorage.getItem('usuario')
    let var01 = JSON.parse('')
    
  }
}
