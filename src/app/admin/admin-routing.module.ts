import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './presentation/pages/page-admin/page-admin.component';
import { PageModulosComponent } from './presentation/pages/page-modulos/page-modulos.component';

const routes: Routes = [
  {path: 'opciones', component: PageAdminComponent},
  {path: 'modulos', component: PageModulosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
