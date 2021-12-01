import { Component, OnInit } from '@angular/core';
import { Modulos } from './modulos';
import { ModulosService } from './modulos.service';
import { Modulosporbanco } from './modulosporbanco';

@Component({
  selector: 'adra-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: [
    './modulos.component.css'
  ]
})
export class ModulosComponent implements OnInit {

  // filas: Modulos[] = [];
  mpb: Modulosporbanco[] = [];
  constructor(private ModulosService: ModulosService) { }

  ngOnInit(): void {
    // this.listar();
    this.modulosporbanco();
  }
  // listar() {
  //   this.ModulosService.getModulos().subscribe(data => {
  //     this.filas = data;
  //     /*console.log(this.filas[0].area?.nombre)*/
  //     console.log(this.filas)
  //   });
  // }
  modulosporbanco() {
    this.ModulosService.getModulosPorBanco().subscribe(data => {
      this.mpb = data;
      console.log(this.mpb)
    })
  }

}
