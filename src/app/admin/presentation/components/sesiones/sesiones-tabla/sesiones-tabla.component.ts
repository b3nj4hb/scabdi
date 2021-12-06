import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../../views/sesiones/recurso';
import { Sesion } from '../../../views/sesiones/sesion';
import { SesionesService } from '../../../views/sesiones/sesiones.service';

@Component({
  selector: 'adra-sesiones-tabla',
  templateUrl: './sesiones-tabla.component.html',
  styles: [
  ]
})
export class SesionesTablaComponent implements OnInit {

  sesiones: Sesion[] = [];
  recursos: Recurso[] = [];

  constructor(private SesionService: SesionesService) { }

  ngOnInit(): void {
    this.listarsesion();
    // this.listarrecursos(1);
  }
  listarsesion() {
    this.SesionService.getSesiones().subscribe(data => {
      this.sesiones = data;
      console.log(this.sesiones)
    })
  }
  listarrecursos(id:any) {
    this.SesionService.getRecursos(id).subscribe(data => {
      this.recursos = data;
      console.log(this.recursos)
    })
  }
  editar(id:any){
    alert("su id es:"+this.sesiones[id].id)
    }
}
