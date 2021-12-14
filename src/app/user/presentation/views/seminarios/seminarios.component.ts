import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { SeminariosService } from './seminarios.service';
import { Component, OnInit } from '@angular/core';
import { Seminario } from './seminarios';
import Swal from 'sweetalert2';
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
  showalert() {
    Swal.fire({
      title: 'LISTO',
      text: 'Se ha registrado su comentario!',
      imageUrl: 'https://cdn.discordapp.com/attachments/867213938096603138/920187718443622440/VOLUNTARITO_TENDENCIA.png',
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      timer: 2700
    })
  }
}
