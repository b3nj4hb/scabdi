import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  nombre: any;
  constructor() { }

  ngOnInit(): void {
    this.username()
  }
  username() {

    this.nombre = sessionStorage.getItem('username')
    console.log(this.nombre)
  }
}
