import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSeminariosComponent } from './presentation/pages/page-seminarios/page-seminarios.component';
import { PageUserComponent } from './presentation/pages/page-user/page-user.component';

const routes: Routes = [
  {path: 'opciones', component: PageUserComponent},
  {path: 'seminarios', component: PageSeminariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
