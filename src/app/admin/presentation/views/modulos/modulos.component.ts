import { Component, OnInit } from '@angular/core';
import { Modulos } from './modulos';
import { ModulosService } from './modulos.service';
import { Modulosporbanco } from './modulosporbanco';
import Swal from 'sweetalert2'
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
  editarM: Modulos =new Modulos;
  constructor(private ModulosService: ModulosService) { }

  ngOnInit(): void {
    this.listar();
    // this.modulosporbanco();
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
    // alert("su id es:" + this.filas[id].id)
    this.editarM = modulo
    console.log(this.editarM)
  }
  eliminar(id: number) {
    var c = Number(this.filas[id].id);
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
