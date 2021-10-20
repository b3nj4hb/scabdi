import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { AdminComponent } from './presentation/views/admin/admin.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { PageModulosComponent } from './presentation/pages/page-modulos/page-modulos.component';
import { ModulosComponent } from './presentation/views/modulos/modulos.component';


@NgModule({
  declarations: [
    PageAdminComponent,
    AdminComponent,
    NavbarComponent,
    PageModulosComponent,
    ModulosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  // exports: [
  //   PageAdminComponent
  // ]
})
export class AdminModule { }
