import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { AdminComponent } from './presentation/views/admin/admin.component';


@NgModule({
  declarations: [
    PageAdminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
