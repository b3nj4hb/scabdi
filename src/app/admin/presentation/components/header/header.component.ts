import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'adra-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fab(){
  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });
      
}
}
