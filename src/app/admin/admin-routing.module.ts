import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulosAsignarComponent } from './presentation/components/modulos/modulos-asignar/modulos-asignar.component';
import { ModulosTablaComponent } from './presentation/components/modulos/modulos-tabla/modulos-tabla.component';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { PageModulosComponent } from './presentation/pages/page-modulos/page-modulos.component';
import { PageSeminariosComponent } from './presentation/pages/page-seminarios/page-seminarios.component';
import { PageSesionesComponent } from './presentation/pages/page-sesiones/page-sesiones.component';
import { SociosComponent } from './presentation/views/socios/socios.component';


const routes: Routes = [
  { path: 'opciones', component: PageAdminComponent },
  { path: 'modulos', component: PageModulosComponent },
  { path: 'modulosporbanco', component: ModulosTablaComponent },
  { path: 'sesiones', component: PageSesionesComponent },
  { path: 'seminarios', component: PageSeminariosComponent },
  { path: 'socios', component: SociosComponent},
  { path:'asignarmodulos', component: ModulosAsignarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
