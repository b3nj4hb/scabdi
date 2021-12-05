import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { PageAdminComponent } from './admin/presentation/pages/page-admin/page-admin.component';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageLoginComponent } from './core/presentation/pages/page-login/page-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageUserComponent } from './user/presentation/pages/page-user/page-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SeminariosService } from './user/presentation/views/seminarios/seminarios.service';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component: PageLoginComponent },
  // { path: '**', redirectTo: '' },
  { path: 'admin', component: PageAdminComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  { path: 'user', component: PageUserComponent },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule, CoreModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    
  ],
  providers: [SeminariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
