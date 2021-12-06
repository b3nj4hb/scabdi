import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/admin/presentation/views/socios/Usuario';
import swal from 'sweetalert2'

import { AuthService } from './login.service';

@Component({
  selector: 'adra-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  variable: any;
  usuario: Usuario;
  rol: string = '';
  constructor(public authService: AuthService, private router: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }
  login(): void {
    this.authService.login(this.usuario).subscribe(response => {
      console.log(response);
      this.variable = this.authService.guardarUsuario(response.access_token, response.id);
      console.log(this.variable.roles[0])
      this.rol = this.variable.roles[0];
      this.authService.guardarToken(response.access_token);
      // todo ternario
      this.rol == 'user' ? this.router.navigate(['/user']) : this.router.navigate(['/admin'])

      let usuario = this.authService.usuario;

      swal.fire('Login', `Hola ${usuario.username}, has iniciado sesión con exito!`)
    }, error => {
      if (error.status == 400) {
        swal.fire('Error Login', 'Usuario o clave Incorrecta', 'error');
      }
    }
    );
  }

}
