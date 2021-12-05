import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { SeminariosService } from './seminarios.service';
import { Component, OnInit } from '@angular/core';
import { Seminario } from './seminarios';
@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styles: [
  ]
})
export class SeminariosComponent implements OnInit {

  filas:Seminario[]=[];
  constructor(private SeminariosService: SeminariosService, public sanitizer:DomSanitizer) { }
  name='Set iframe source' 
  url:string="https://www.youtube.com/embed/HNjV3Jv3obM";
  urlSafe?:SafeResourceUrl;
  ngOnInit(): void {
    this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    this.listar();
   this.seminarioactual();
  }
  listar(){
    this.SeminariosService.getSeminarios().subscribe(data =>{
      this.filas= data;
      console.log(this.filas)
    });
  }
  seminarioactual(){
    this.SeminariosService.getSeminarioactual().subscribe(data =>{
      this.filas=data;
      console.log(this.filas)
      this.urlSafe=this.filas[0].url?this.sanitizer.bypassSecurityTrustResourceUrl(this.filas[0].url):this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    
    });
  }
}
