import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModuloService } from './modulos.service';
import { Recurso } from './recurso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-modulos',
  templateUrl: './modulos.component.html',
  styles: [
  ]
})
export class ModulosComponent implements OnInit {
name='Set iframe source' 
url:string="https://www.youtube.com/embed/HNjV3Jv3obM";
urlSafe?:SafeResourceUrl;

  recurso: Recurso[] = [];
  constructor(private ModuloService: ModuloService, public sanitizer:DomSanitizer) { }
  
  ngOnInit() {
    this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    this.listarrecurso(1)

  }

setUrl(url:string|undefined){
this.url=url ?url:"https://www.youtube.com/embed/HNjV3Jv3obM"
this.urlSafe=this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
}

  listarrecurso(id:any) {
    console.log(id)
    this.ModuloService.getRecurso(id).subscribe(data => {
      this.recurso = data;
      console.log(this.recurso)
    })
  }

}
