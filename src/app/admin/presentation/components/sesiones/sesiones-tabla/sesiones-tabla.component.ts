import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../../views/sesiones/recurso';
import { Sesion } from '../../../views/sesiones/sesion';
import { SesionesService } from '../../../views/sesiones/sesiones.service';
import { Modulo } from '../../navbar/modulos-navbar/modulo';
import Swal from 'sweetalert2'
import { ModulosService } from '../../../views/modulos/modulos.service';
import { Modulos } from '../../../views/modulos/modulos';
@Component({
  selector: 'adra-sesiones-tabla',
  templateUrl: './sesiones-tabla.component.html',
  styles: [
  ]
})
export class SesionesTablaComponent implements OnInit {

  sesiones: Sesion[] = [];
  recursos: Recurso[] = [];

  editarS: Sesion = new Sesion;
  modulocrear = new Modulo;
  sesion = new Sesion;
  modulolistar: Modulos[] = [];

  constructor(private SesionService: SesionesService, private ModulosService: ModulosService) { }

  ngOnInit(): void {
    this.listarsesion();
    // this.listarrecursos(1);
  }
  obtenerIdModulo(id: any) {
    console.log(id.target.value)
    this.sesion.modulo.id = Number(id.target.value)
  }
  obtenerIdSesion(sesion:Sesion){
    this.editarS = sesion;
    // console.log(this.)
  }
  actualizarSesion() {
    this.SesionService.actualizarSesion(this.editarS.id, this.editarS).subscribe(data => {
      console.log(data)
    })
    this.confirmar()
  }
  editarSesion(sesion: Sesion) {
    this.editarS = sesion
    console.log(this.editarS)
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
  listarmodulo() {
    this.ModulosService.getModulos().subscribe(data => {
      this.modulolistar = data
      console.log(this.modulolistar)
    })
  }
  listarsesion() {
    this.SesionService.getSesiones().subscribe(data => {
      this.sesiones = data;
      console.log(this.sesiones)
    })
  }
  listarrecursos(id: any) {
    this.SesionService.getRecursos(id).subscribe(data => {
      this.recursos = data;
      console.log(this.recursos)
    })
  }
  editar(id: any) {
    alert("su id es:" + this.sesiones[id].id)
  }
}
