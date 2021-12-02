import { Persona } from './persona';
import { PedidosOracionService } from './pedidos-oracion.service';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from './pedidos-oracion';
@Component({
  selector: 'adra-pedidos-oracion',
  templateUrl: './pedidos-oracion.component.html',
  styles: [
  ]
})
export class PedidosOracionComponent implements OnInit {
  per = new Persona;
  post=new Pedidos;
  CurrentDate = new Date();
  constructor(private ob:PedidosOracionService) { }

  ngOnInit(): void {
  this.per.id=2;
  this.post.id_persona=this.per
  this.post.fecha= "2021-10-26 20:20:33"
  }

  guardar(){
    this.ob.create(this.post)
    .subscribe(data => {
      console.log(data)
    })    
    }
    
}
