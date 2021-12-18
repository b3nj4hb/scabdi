import { NavbarServiceService } from './navbar-service.service';
import { AuthService } from 'src/app/core/presentation/views/login/login.service';
import { Pedidos } from './pedidos-oracion';
import { Persona } from 'src/app/admin/presentation/views/socios/persona';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'adra-navbar',
  templateUrl: './navbar.component.html',
  styles: [ 
  ],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

 
  per = new Persona;
  post = new Pedidos;
  CurrentDate = new Date();
  constructor(private ob: NavbarServiceService, private ls: AuthService) { }
  today = Date.now();
  fixedTimezone = this.today;

  ngOnInit(): void {
    this.per.id = this.ls.usuario.idusuario;
    this.post.id_persona = this.per
    this.post.fecha = '2021-10-26 20:20:33';
    // this.post.fecha = this.today;
    // console.log(this.per)

  }
  alert(){
    Swal.fire({
      title: '¡IMPORTANTE!',
      imageUrl: 'https://media.discordapp.net/attachments/867213938096603138/917126045910569000/adra_asistencia_sin_fondo.png',
      imageWidth: 800,
      imageHeight: 350,
      imageAlt: 'Custom image',
    })
  }

  guardar() {
    this.ob.create(this.post).subscribe(data => {
        console.log(data)
      })
  }

  showalert() {
    Swal.fire({
      title: 'LISTO',
      text: 'Pedido registrado con éxito!',
      imageUrl: 'https://adra.org.pe/colecta/assets/img/voluntarito-4-2019.png',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: 'Custom image',
      showConfirmButton: false,
      timer: 2500
    })
  }
}
