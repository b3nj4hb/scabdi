import { Component, OnInit } from '@angular/core';
import { ModulosService } from '../../../views/modulos/modulos.service';
import { Modulosporbanco } from './modulosporbanco';

@Component({
  selector: 'adra-modulos-tabla',
  templateUrl: './modulos-tabla.component.html',
  styles: [
  ]
})
export class ModulosTablaComponent implements OnInit {

  mpb:Modulosporbanco[]=[];

  constructor(private ModulosService: ModulosService) { }

  ngOnInit(): void {
  }
  modulosporbanco(){
    this.ModulosService.getModulosPorBanco().subscribe(data =>{
      this.mpb = data;
      console.log(this.mpb)
    })
  }
}
