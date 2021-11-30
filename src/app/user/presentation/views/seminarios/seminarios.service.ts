import { Seminario } from './seminarios';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SeminariosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint:string = 'http://localhost:9292/api/conferencia'
  constructor(private http:HttpClient,private router:Router) { }
  getSeminarios():Observable<Seminario[]>{
    return this.http.get<Seminario[]>(this.urlEndPoint + '/all');    
  }
  

  
}
