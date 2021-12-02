import { Observable } from 'rxjs';
import { Pedidos } from './pedidos-oracion';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosOracionService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private urlpost:string ='http://localhost:9292/api/pedido'; 
  constructor(private http: HttpClient, private router: Router) { }
  create(post:Pedidos):Observable<any>{   
    
    return this.http.post<Pedidos>(this.urlpost + '/create', post,this.httpOptions);

}
}
