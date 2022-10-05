import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitHomeComponent } from './components/init-page/init-home/init-home.component';
import { InitPageComponent } from './components/init-page/init-page/init-page.component';
import { LoginFormComponent } from './components/init-page/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/init-page/reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './components/init-page/update-password-form/update-password-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/init/home', pathMatch: 'full' },
  { path: 'init', component: InitPageComponent, children: [
    { path: '', redirectTo: '/init/home', pathMatch: 'full' },
    { path: 'home', component: InitHomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'resetPassword', component: ResetPasswordFormComponent },
    { path: 'updatePassword', component: UpdatePasswordFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
