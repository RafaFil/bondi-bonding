import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LogoImageComponent } from './components/logo-image/logo-image.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { PasswordUpdatedDialogComponent } from './components/password-updated-dialog/password-updated-dialog.component';
import { UpdatePasswordFormComponent } from './components/update-password-form/update-password-form.component';
import { ResetPasswordFormComponent } from './components/reset-password-form/reset-password-form.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LandingPageComponent,
    LogoImageComponent,
    LandingHomeComponent,
    LoginFormComponent,
    PasswordUpdatedDialogComponent,
    UpdatePasswordFormComponent,
    ResetPasswordFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
