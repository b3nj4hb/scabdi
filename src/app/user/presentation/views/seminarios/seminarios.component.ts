import { SeminariosService } from './seminarios.service';
import { Component, OnInit } from '@angular/core';
import { Seminario } from './seminarios';
@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styles: [
  ]
})
export class SeminariosComponent implements OnInit {

  filas:Seminario[]=[];
  constructor(private SeminariosService: SeminariosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar(){
    this.SeminariosService.getSeminarios().subscribe(data =>{
      this.filas= data;
      console.log(this.filas)
    });
  }
}
