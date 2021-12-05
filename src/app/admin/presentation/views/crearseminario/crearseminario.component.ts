import { Seminario } from './Seminario';
import { CrearService } from './crear.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'adra-crearseminario',
  templateUrl: './crearseminario.component.html',
  styles: [
  ]
})
export class CrearseminarioComponent implements OnInit {
  post=new Seminario;
constructor(private ob:CrearService){}

  ngOnInit(): void {
  }
guardar(){
 
  this.ob.create(this.post).subscribe(data =>{console.log(data)})
}
}
