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

 
  constructor() { }

  ngOnInit(): void {

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
}
