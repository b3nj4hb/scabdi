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
import { Recurso1Component } from './presentation/views/recursos/recurso1/recurso1.component';
import { Recurso2Component } from './presentation/views/recursos/recurso2/recurso2.component';
import { Recurso3Component } from './presentation/views/recursos/recurso3/recurso3.component';
import { Recurso4Component } from './presentation/views/recursos/recurso4/recurso4.component';
import { Recurso5Component } from './presentation/views/recursos/recurso5/recurso5.component';
import { Recurso6Component } from './presentation/views/recursos/recurso6/recurso6.component';
import { Recurso7Component } from './presentation/views/recursos/recurso7/recurso7.component';


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
    Recurso1Component,
    Recurso2Component,
    Recurso3Component,
    Recurso4Component,
    Recurso5Component,
    Recurso6Component,
    Recurso7Component,
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
