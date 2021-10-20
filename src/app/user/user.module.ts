import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { UserComponent } from './presentation/views/user/user.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';


@NgModule({
  declarations: [
    PageUserComponent,
    UserComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
