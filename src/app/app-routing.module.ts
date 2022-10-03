import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitHomeComponent } from './components/init-home/init-home.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';

const routes: Routes = [
  { path: '', component: InitHomeComponent },
  { path: 'login', component: LoginFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
