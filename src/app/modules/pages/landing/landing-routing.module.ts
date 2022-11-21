import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent, children:
    [
      { path: '', component: LandingHomeComponent },
      { path: 'login', component: LoginFormComponent },
      { path: 'resetPassword', component: ResetPasswordFormComponent },
      { path: 'updatePassword', component: UpdatePasswordFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
