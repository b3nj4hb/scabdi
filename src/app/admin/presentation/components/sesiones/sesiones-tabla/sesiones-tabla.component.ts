import { Component, OnInit } from '@angular/core';
import { Sesiones } from '../../../views/sesiones/sesiones';
import { SesionesService } from '../../../views/sesiones/sesiones.service'; 
import { NavbarService } from 'src/app/user/presentation/components/navbar/navbar.service';
import { recursos } from './recursos';

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
    private NavbarService: NavbarService
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
  listarrecurso(id:any) {
    
    this.NavbarService.getlistadorecurso(id).subscribe(data => {
      
      this.recurso = data;
      console.log(this.recurso)
    });
  }
  listadorecursos(){
    this.NavbarService.getRecursos().subscribe(data => {
      this.sesiones = data;
      console.log(this.recurso)
    })
  }
  // public recurso(): void {
  //   this.comp.listarrecurso(id)
  // }
}
