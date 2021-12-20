import { Component, OnInit } from '@angular/core';
declare var $: any;
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
  fab() {
    $(document).ready(function () {
      $('.fixed-action-btn').floatingActionButton();
    });

  }
}
