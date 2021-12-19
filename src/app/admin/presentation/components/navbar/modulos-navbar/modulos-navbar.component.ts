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
  arealistar: Area[] = [];
  areacrear = new Area;
  modulolistar: Modulo[] = [];
  constructor(private ob: CrearService, private cs: CrearMSService) { }


  ngOnInit(): void {
    this.listarArea()
    this.listarModulo()
  }
  // listar areas
  listarArea() {
    this.cs.obtenerArea().subscribe(data => {
      this.arealistar = data;
      console.log(this.arealistar)
    })

  }
  obtenerIdArea(id:any) {
    console.log(id.target.value)
    this.modulo.area.id = Number(id.target.value)
  }
  // crear seminario
  guardar() {

    this.ob.create(this.post).subscribe(data => { console.log(data) })
  }
  listarModulo() {
    this.cs.obtenerModulo().subscribe(data => {
      this.modulolistar = data;
      console.log(this.modulolistar)
    })
  }
  obtenerIdModulo(id:any){
    console.log(id.target.value)
    this.sesion.id_modulo.id = Number(id.target.value)
  }
  crearSesion() {
    this.sesion.id_modulo.id = Number(this.modulo.id)
    this.cs.crearSesion(this.sesion).subscribe(data => { console.log(data) })
    console.log(this.sesion)
  }
  crearModulo() {
    this.modulo.area.id = Number(this.areacrear.id)
    this.cs.crearModulo(this.modulo).subscribe(data => { console.log(data) })
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
