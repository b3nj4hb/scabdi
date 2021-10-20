import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './admin/presentation/pages/page-admin/page-admin.component';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: PageLoginComponent},
  // {path:'**', redirectTo:''},
  {path: 'admin', component: PageAdminComponent},
  {path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) =>m.AdminModule)
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CoreModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
