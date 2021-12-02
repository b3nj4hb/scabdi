import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'adra-recursos',
  templateUrl: './recursos.component.html',
  styles: [
  ]
})
export class RecursosComponent implements OnInit {
  name = 'Set iframe source';
  url: string = 'https://www.youtube.com/embed/d86LpR0hiHU';
  urlSafe?: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
 
}
