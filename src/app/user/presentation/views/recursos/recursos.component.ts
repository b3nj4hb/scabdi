import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adra-recursos',
  templateUrl: './recursos.component.html',
  styles: [
  ]
})
export class RecursosComponent implements OnInit {
 

  constructor(private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
   this.route.paramMap.subscribe(params=>{
     if (params.has("id_recurso")) {
       console.log(params.get("id_recurso"))
     }
   })
  }
 
}
