import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona';
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
    this.listarsocios();
  }

  listarsocios() {
    this.socioserv.getSocios().subscribe(data => {
      this.persona = data;
      console.log(this.persona)
    })
  }
}
