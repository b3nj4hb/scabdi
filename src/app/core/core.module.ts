import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { LoginComponent } from './presentation/views/login/login.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    PageLoginComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PageLoginComponent, 
  ]
})
export class CoreModule { }
