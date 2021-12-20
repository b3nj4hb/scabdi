import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { SocioService } from './socio.service';

@Component({
  selector: 'adra-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.css']
})
export class SociosComponent implements OnInit {
  // persona: Persona[] = [];
  socio: any[] = [];
  datos: any[] = [];
  modulos: any[] = [];
  pedidos: any[] = [];
  constructor(private socioserv: SocioService) { }

  ngOnInit(): void {
    // this.listarsocios(5);
    this.listarSocio();
    // this.listarDatos(5);
    // this.listarModulos(2);
    // this.listarPedidos(5);
  }

  // procedimiento josue
  // listarsocios(id: any) {
  //   this.socioserv.getSocios(id).subscribe(data => {
  //     this.persona = data;
  //     console.log(this.persona)
  //   })
  // }

  // reporte socio
  listarSocio() {
    this.socioserv.getSocio().subscribe(data => {
      this.socio = data;
      console.log(this.socio)
    })
  }
  listarDatos(id: any) {
    this.socioserv.getDatos(id).subscribe(data => {
      this.datos = data;
      console.log(this.datos)
    })
  }
  listarModulos(id: any) {
    this.socioserv.getModulos(id).subscribe(data => {
      this.modulos = data;
      console.log(this.modulos)
    })
  }
  listarPedidos(id: any) {
    this.socioserv.getPedidos(id).subscribe(data => {
      this.pedidos = data;
      console.log(this.pedidos)
    })
  }
}
