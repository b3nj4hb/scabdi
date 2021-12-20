import { Component, OnInit } from '@angular/core';
import { Seminario, Seminarioid } from 'src/app/user/presentation/views/seminarios/seminarios';
import { Digi2 } from './digi2';
import { SeminariosService } from './seminarios.service';

@Component({
  selector: 'adra-seminarios',
  templateUrl: './seminarios.component.html',
  styleUrls: ['./seminarios.component.css']
})
export class SeminariosComponent implements OnInit {

  // digi2: Digi2[] = []; //datos de la consulta digi, comentarios de socios
  digi3: Seminarioid[] = []; //datos de seminario

  editarS: Seminarioid = new Seminarioid;

  constructor(private SeminariosService: SeminariosService) { }

  ngOnInit(): void {
    // this.listardigi2(3);
    this.listarseminarios();
  }

  actualizarSeminario() {
    this.SeminariosService.actualizarSeminario(this.editarS.id, this.editarS).subscribe(data => {
      console.log(data)
    })
  }
  capturardatos(digi3:Seminarioid) {
    this.editarS = digi3
    console.log(this.editarS)
  }
  // funcion listar datos de la consulta
  // listardigi2(id: any) {
  //   console.log(id.target.value)
  //   // var c=Number(this.digi2[id].'valor id de la clase')
  //   this.SeminariosService.getDigi2(id.target.value).subscribe(data => {
  //     this.digi2 = data;
  //     console.log(this.digi2)
  //   })
  // }
  // funcion listar seminarios
  listarseminarios() {
    this.SeminariosService.getSeminarios().subscribe(data => {
      this.digi3 = data;
      console.log(this.digi3)
    })
  }

}
