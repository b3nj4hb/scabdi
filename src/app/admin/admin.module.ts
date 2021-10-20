import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { AdminComponent } from './presentation/views/admin/admin.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { PageModulosComponent } from './presentation/pages/page-modulos/page-modulos.component';
import { ModulosComponent } from './presentation/views/modulos/modulos.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    PageAdminComponent,
    AdminComponent,
    NavbarComponent,
    PageModulosComponent,
    ModulosComponent,
    HeaderComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  // exports: [
  //   PageAdminComponent
  // ]
})
export class AdminModule { }
