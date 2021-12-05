import { Component, OnInit } from '@angular/core';
import { Sesiones } from '../../../views/sesiones/sesiones';
import { SesionesService } from '../../../views/sesiones/sesiones.service'; 
import { recursos } from './recursos';
// navbar service
@Component({
  selector: 'adra-sesiones-tabla',
  templateUrl: './sesiones-tabla.component.html',
  styles: [
  ]
})
export class SesionesTablaComponent implements OnInit {

  recurso: recursos[] = [];
  sesiones: Sesiones[] = [];
  constructor(
    private SesionesService: SesionesService,
    ) { }

  ngOnInit(): void {
    this.listar();
    // this.listarrecurso(1);
    // this.listadorecursos();
  }

  listar() {
    this.SesionesService.getSesiones().subscribe(data => {
      this.sesiones = data;
      console.log(this.sesiones)
    });
  }


  // public recurso(): void {
  //   this.comp.listarrecurso(id)
  // }
}
