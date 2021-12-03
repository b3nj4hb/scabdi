import { Component, OnInit } from '@angular/core';
import { Sesiones } from '../../../views/sesiones/sesiones';
import { SesionesService } from '../../../views/sesiones/sesiones.service'; 
import { NavbarComponent } from 'src/app/user/presentation/components/navbar/navbar.component';

@Component({
  selector: 'adra-sesiones-tabla',
  templateUrl: './sesiones-tabla.component.html',
  styles: [
  ]
})
export class SesionesTablaComponent implements OnInit {


  sesiones: Sesiones[] = [];
  constructor(
    private SesionesService: SesionesService,
    // private comp: NavbarComponent
    ) { }

  ngOnInit(): void {
    this.listar();
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
