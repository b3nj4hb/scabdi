import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { AdminComponent } from './presentation/views/admin/admin.component';
import { PageModulosComponent } from './presentation/pages/page-modulos/page-modulos.component';
import { ModulosComponent } from './presentation/views/modulos/modulos.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PageSesionesComponent } from './presentation/pages/page-sesiones/page-sesiones.component';
import { ModulosNavbarComponent } from './presentation/components/navbar/modulos-navbar/modulos-navbar.component';
import { SesionesComponent } from './presentation/views/sesiones/sesiones.component';
import { SesionesTablaComponent } from './presentation/components/sesiones/sesiones-tabla/sesiones-tabla.component';
import { ModulosTablaComponent } from './presentation/components/modulos/modulos-tabla/modulos-tabla.component';
import { ModulosModalAddComponent } from './presentation/components/modulos/modulos-modal-add/modulos-modal-add.component';
import { ModulosModalAsignarComponent } from './presentation/components/modulos/modulos-modal-asignar/modulos-modal-asignar.component';
import { SeminariosComponent } from './presentation/views/seminarios/seminarios.component';
import { PageSeminariosComponent } from './presentation/pages/page-seminarios/page-seminarios.component';
import { SeminariosTablaComponent } from './presentation/components/seminarios/seminarios-tabla/seminarios-tabla.component';
import { SeminariosModalAddComponent } from './presentation/components/seminarios/seminarios-modal-add/seminarios-modal-add.component';
import { SeminariosModalAsignarComponent } from './presentation/components/seminarios/seminarios-modal-asignar/seminarios-modal-asignar.component';
import { SeminariosNavbarComponent } from './presentation/components/navbar/seminarios-navbar/seminarios-navbar.component';
import { SesionesModalAddComponent } from './presentation/components/sesiones/sesiones-modal-add/sesiones-modal-add.component';
import { CrearseminarioComponent } from './presentation/views/crearseminario/crearseminario.component';
import { FormsModule } from '@angular/forms';
import { SociosComponent } from './presentation/views/socios/socios.component';
import { SociosNavbarComponent } from './presentation/components/navbar/socios-navbar/socios-navbar.component';
import { ProgramacionComponent } from './presentation/views/programacion/programacion.component';
@NgModule({
  declarations: [
    PageAdminComponent,
    AdminComponent,
    PageModulosComponent,
    ModulosComponent,
    HeaderComponent,
    PageSesionesComponent,
    ModulosNavbarComponent,
    SesionesComponent,
    SesionesTablaComponent,
    ModulosTablaComponent,
    ModulosModalAddComponent,
    ModulosModalAsignarComponent,
    SeminariosComponent,
    PageSeminariosComponent,
    SeminariosTablaComponent,
    SeminariosModalAddComponent,
    SeminariosModalAsignarComponent,
    SeminariosNavbarComponent,
    SesionesModalAddComponent,
    CrearseminarioComponent,
    SociosComponent,
    SociosNavbarComponent,
    ProgramacionComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    FormsModule 
  ],
  // exports: [
  //   PageAdminComponent
  // ]
})
export class AdminModule { }
