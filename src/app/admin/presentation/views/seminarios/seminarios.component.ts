import { Component, OnInit } from '@angular/core';
import { Digi2 } from './digi2';
import { SeminariosService } from './seminarios.service';

@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {

  digi2: Digi2[] = [];

  constructor(private SeminariosService: SeminariosService) { }

  ngOnInit(): void {
    this.listardigi2(3);
  }

  listardigi2(id:number) {
    // var c=Number(this.digi2[id].'valor id de la clase')
    this.SeminariosService.getDigi2(id).subscribe(data => {
      this.digi2 = data;
      console.log(this.digi2)
    })
  }

}
