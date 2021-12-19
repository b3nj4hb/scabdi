import { Component, OnInit } from '@angular/core';
import { Modulos } from './modulos';
import { ModulosService } from './modulos.service';
import { Modulosporbanco } from './modulosporbanco';
import Swal from 'sweetalert2'
import { Area } from './area';
import { CrearMSService } from '../../components/navbar/modulos-navbar/crear.service';
import { Modulo } from '../../components/navbar/modulos-navbar/modulo';
import { findLast } from '@angular/compiler/src/directive_resolver';
// import swal from 'sweetalert2';
// import Swal from 'sweetalert2'
@Component({
  selector: 'adra-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: [
    './modulos.component.css'
  ]
})
export class ModulosComponent implements OnInit {

  filas: Modulos[] = [];
  // mpb: Modulosporbanco[] = [];
  editarM: Modulos = new Modulos;
  modulo = new Modulo;
  areacrear = new Area;
  arealistar: Area[] = [];
  actualizarM: Modulo = new Modulo;
  eliminarM:number = 0;

  constructor(private ModulosService: ModulosService, private cs: CrearMSService) { }

  ngOnInit(): void {
    this.listar();
    this.listarArea()
    // this.modulosporbanco();
  }
  actualizarModulo() {
    this.cs.actualizarModulo(this.editarM.id, this.editarM).subscribe(data => {
      console.log(data)
      this.confirmar()
    })
  }
  listarArea() {
    this.cs.obtenerArea().subscribe(data => {
      this.arealistar = data;
      console.log(this.arealistar)
    })
  }
  obtenerIdArea(id: any) {
    console.log(id.target.value)
    this.modulo.area.id = Number(id.target.value)
  }
  obtenerIdModulo(modulo:Modulos) {
    this.editarM = modulo
    this.eliminarM = this.editarM.id
    console.log(this.eliminarM)
    // this.eliminar()
  }
  listar() {
    this.ModulosService.getModulos().subscribe(data => {
      this.filas = data;
      /*console.log(this.filas[0].area?.nombre)*/
      
      console.log(this.filas)

    });
  }

  // modulosporbanco() {
  //   this.ModulosService.getModulosPorBanco().subscribe(data => {
  //     this.mpb = data;
  //     console.log(this.mpb)
  //   })
  // }
  confirmar() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'MODULO CREADO',
      showConfirmButton: false,
      timer: 1500
    })
  }
  editar(modulo: Modulos) {
    this.editarM = modulo
    // alert("su id es:" + this.editarM.id)
    console.log(this.editarM)
  }
  eliminar() {
    // alert("su id es:" + this.editarM.id)
    var c = this.eliminarM;
    this.ModulosService.delete(c).subscribe(data => {
      console.log(data)
    });
    this.listar();
  }
  confirmareliminar() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta Seguro?',
      text: "No se podrá revetir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminar()
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Su modulo ha sido eliminado.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Su modulo está a salvo :)',
          'error'
        )
      }
    })
  }

  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: "You won't be able to revert this!",
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonColor: '#3085d6',
  //   cancelButtonColor: '#d33',
  //   confirmButtonText: 'Yes, delete it!'
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })

}
