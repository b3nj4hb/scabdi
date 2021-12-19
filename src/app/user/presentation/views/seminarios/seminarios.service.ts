import { Seminario } from './seminarios';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SeminariosService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private urlEndPoint:string = 'https://scabdi.herokuapp.com/api/conferencia'
  private urla:string = 'https://scabdi.herokuapp.com/api/asistencia'
  constructor(private http:HttpClient,private router:Router) { }
  getSeminarios():Observable<Seminario[]>{
    return this.http.get<Seminario[]>(this.urlEndPoint + '/all');    
  }
  getSeminarioactual():Observable<any[]>{
    return this.http.get<any[]>(this.urlEndPoint + '/conferenciadehoy');
  }
  // crearComentario(post: any): Observable<any> {
  //   return this.
  // }

  
}
