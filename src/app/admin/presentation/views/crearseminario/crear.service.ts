import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Seminario } from 'src/app/user/presentation/views/seminarios/seminarios';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearService {
httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})
};
private urlpost:string ='https://scabdi.herokuapp.com/api/conferencia';
constructor(private http: HttpClient,private router: Router){}

create(post:Seminario):Observable<any> {
  return this.http.post<Seminario>(this.urlpost+'/create',post,this.httpOptions)
 }
}
