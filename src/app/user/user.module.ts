import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { UserComponent } from './presentation/views/user/user.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { NavbarComponent } from './presentation/components/navbar/navbar.component';
import { PageSeminariosComponent } from './presentation/pages/page-seminarios/page-seminarios.component';
import { SeminariosComponent } from './presentation/views/seminarios/seminarios.component';
import { ModulosComponent } from './presentation/views/modulos/modulos.component';
import { PedidosOracionComponent } from './presentation/views/pedidos-oracion/pedidos-oracion.component';
import { RecursosComponent } from './presentation/views/recursos/recursos.component';
import { ProgresoComponent } from './presentation/views/progreso/progreso.component';



@NgModule({
  declarations: [
    PageUserComponent,
    UserComponent,
    HeaderComponent,
    NavbarComponent,
    PageSeminariosComponent,
    SeminariosComponent,
    ModulosComponent,
    PedidosOracionComponent,
    RecursosComponent,
    ProgresoComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
   exports: [
     PageUserComponent,PageSeminariosComponent,PedidosOracionComponent,ModulosComponent
   ]
})
export class UserModule { }
