import { NavbarService } from './navbar.service';
import { Recurso } from './recurso';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-navbar',
  templateUrl: './navbar.component.html',
  styles: [ 
  ],
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  recurso: Recurso[] = [];
  constructor(private NavbarService: NavbarService) { }

  ngOnInit(): void {
    this.listarrecurso(8)
  }
  listarrecurso(id:any) {
    console.log(id)
    this.NavbarService.getRecurso(id).subscribe(data => {
      this.recurso = data;
      console.log(this.recurso)
    })
  }
}
