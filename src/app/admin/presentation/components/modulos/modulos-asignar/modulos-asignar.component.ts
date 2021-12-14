import { Component, OnInit } from '@angular/core';
import { Modulos } from '../../../views/modulos/modulos';
import { ModulosService } from '../../../views/modulos/modulos.service';
import { Banco } from '../../../views/socios/banco';
import { AsignarService } from './asignar.service';

@Component({
  selector: 'adra-modulos-asignar',
  templateUrl: './modulos-asignar.component.html',
  styleUrls: ['./asignar.css']
})
export class ModulosAsignarComponent implements OnInit {
  modulo: Modulos[] = [];
  banco: Banco[] = [];
  constructor(private mservice: ModulosService, 
    private bservice: AsignarService
    ) { }

  ngOnInit(): void {
    this.listarbancos();
    this.listarmodulos();
  }
  listarmodulos() {
    this.mservice.getModulos().subscribe(data => {
      this.modulo = data;
      console.log(this.modulo)
    })
  }
  listarbancos() {
    this.bservice.getBanco().subscribe(data => {
      this.banco = data;
      console.log(this.banco)
    })
  }
}
