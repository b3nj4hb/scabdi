import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/presentation/views/login/login.service';

@Component({
  selector: 'adra-admin',
  templateUrl: './admin.component.html',
  styles: [
  ]
})
export class AdminComponent implements OnInit {

  constructor(private login: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (!this.login.isAuthenticated()){
      this.router.navigate(['/']);
    }
  }
  logout() {
    this.login.logout();
    this.router.navigate(['/']);
  }

}
