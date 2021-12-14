import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/presentation/views/login/login.service';

@Component({
  selector: 'adra-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private login: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.login.logout();
    this.router.navigate(['/']);
  }


}
