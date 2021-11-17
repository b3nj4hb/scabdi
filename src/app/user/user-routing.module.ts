import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSeminariosComponent } from './presentation/pages/page-seminarios/page-seminarios.component';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';
import { ModulosComponent } from './presentation/views/modulos/modulos.component'; 
import { PedidosOracionComponent } from './presentation/views/pedidos-oracion/pedidos-oracion.component';

const routes: Routes = [
  {path: 'opciones', component: PageUserComponent},
  {path: 'seminarios', component: PageSeminariosComponent},
  {path: 'modulos', component: ModulosComponent},
  {path: 'pedidos-oracion', component:PedidosOracionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
