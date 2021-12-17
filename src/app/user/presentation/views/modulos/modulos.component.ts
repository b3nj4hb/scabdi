import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModuloService } from './modulos.service';
import { Recurso } from './recurso';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Sesionactiva } from './sesionactiva';
@Component({
  selector: 'adra-modulos',
  templateUrl: './modulos.component.html',
  styles: [
  ]
})
export class ModulosComponent implements OnInit {
  name = 'Set iframe source'
  url: string = "https://www.youtube.com/embed/LaIchdMGFpE";
  urlSafe?: SafeResourceUrl;

  sesion: Sesionactiva[] = [];
  recurso: Recurso[] = [];
  constructor(private ModuloService: ModuloService, public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
    // this.listarrecurso(2) sesion 2
    this.sesionActiva()
  }

  setUrl(url: string | undefined) {
    this.url = url ? url : "https://www.youtube.com/embed/HNjV3Jv3obM"
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url)
  }

  sesionActiva() {
    this.ModuloService.getSesionActiva().subscribe(data => {
      this.sesion = data;
      console.log(this.sesion)
    })
  }

  listarrecurso(id: any) {
    console.log(id)
    this.ModuloService.getRecurso(id).subscribe(data => {
      this.recurso = data;
      console.log(this.recurso)
    })
  }

  ayuda() {
    Swal.fire({
      title: 'SI PRESIONAS ESTE BOTON, EL RECURSO DENTRO SE MOSTRARA AL LADO DERECHO',
      width: 450,
      position: 'bottom',
      confirmButtonText: 'GRACIAS!',
      imageUrl: 'https://media.discordapp.net/attachments/867252664853200906/920239633860821032/unknown.png',
      imageWidth: 60,
      imageHeight: 50,
      color: '#239B56 ',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(21, 21, 21,0.5)
        url("https://media.discordapp.net/attachments/867252664853200906/920239365693780008/ayudante5.png?width=1202&height=676")
        bottom left
        no-repeat
      `
    })
  }
  ayuda2() {
    Swal.fire({
      title: 'AL PRESIONAR EL BOTON DE "FINALIZAR" USTED CALIFICARA ESTA SESION',
      width: 450,

      position: 'bottom',
      confirmButtonText: 'GRACIAS!',
      color: '#239B56 ',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(21, 21, 21,0.5)
        url("https://media.discordapp.net/attachments/867252664853200906/920244690576633876/al_finnnnn.png?width=1202&height=676")
        right bottom
        no-repeat
      `
    })
  }

}
