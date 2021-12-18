import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Seminario } from '../../../views/crearseminario/Seminario';
import { CrearService } from '../../../views/crearseminario/crear.service';
import { Modulo } from './modulo';
import { Sesion } from './sesion';
import { CrearMSService } from './crear.service';
import { Area } from '../../../views/modulos/area';

@Component({
  selector: 'adra-modulos-navbar',
  templateUrl: './modulos-navbar.component.html',
  styleUrls: ['./modulos-navbar.component.css']
})
export class ModulosNavbarComponent implements OnInit {
  post = new Seminario;
  modulo = new Modulo;
  sesion = new Sesion;
  area = new Area;
  constructor(private ob: CrearService, private cs: CrearMSService) { }


  ngOnInit(): void {
  }
  guardar() {

    this.ob.create(this.post).subscribe(data => { console.log(data) })
  }

  crearSesion(){
    this.cs.crearSesion(this.sesion).subscribe(data => {console.log(data)})
  }
  crearModulo(){
    this.modulo.area.id = Number(this.area.id)
    this.cs.crearModulo(this.modulo).subscribe(data => {console.log(data)})
    console.log(this.modulo)
  }

  confirmar() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'MODULO CREADO',
      showConfirmButton: false,
      timer: 1500
    })
  }
  confirmarsesion() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'SESION CREADA',
      showConfirmButton: false,
      timer: 1500
    })
  }
  confirmarsem() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'SEMINARIO CREADO',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
