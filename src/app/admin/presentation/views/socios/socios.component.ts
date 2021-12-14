import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { SocioService } from './socio.service';

@Component({
  selector: 'adra-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.css']
})
export class SociosComponent implements OnInit {
  persona: Persona[] = [];
  constructor(private socioserv: SocioService) { }

  ngOnInit(): void {
    this.listarsocios(1);
  }

  listarsocios(id:any) {
    this.socioserv.getSocios(id).subscribe(data => {
      this.persona = data;
      console.log(this.persona)
    })
  }
}
