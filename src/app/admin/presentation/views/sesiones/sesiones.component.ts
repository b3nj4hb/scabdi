import { Component, OnInit } from '@angular/core';
import { Sesiones } from './sesiones';
import { SesionesService } from './sesiones.service';

@Component({
  selector: 'adra-sesiones',
  templateUrl: './sesiones.component.html',
  styleUrls: ['./sesiones.component.css']
})
export class SesionesComponent implements OnInit {

  // sesiones: Sesiones[] = [];
  constructor(private SesionesService: SesionesService) { }

  ngOnInit(): void {
    // this.listar();
  }

  // listar() {
  //   this.SesionesService.getSesiones().subscribe(data => {
  //     this.sesiones = data;
  //     console.log(this.sesiones)
  //   });
  // }
}
