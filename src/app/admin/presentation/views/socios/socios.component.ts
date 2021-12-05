import { Component, OnInit } from '@angular/core';
import { Socio } from './socios';
import { SociosService } from './socios.service';

@Component({
  selector: 'adra-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.css']
})
export class SociosComponent implements OnInit {

  socios: any[] = [];
  constructor(private SociosService: SociosService) { }

  ngOnInit(): void {
    this.listar();
  }
  listar() {
    this.SociosService.getSocios().subscribe(data => {
      this.socios = data;
      console.log(this.socios)
    });
  }
}
