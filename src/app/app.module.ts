import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './components/init-page/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/init-page/reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './components/init-page/update-password-form/update-password-form.component';
import { PasswordUpdatedDialogComponent } from './components/init-page/update-password-form/password-updated-dialog/password-updated-dialog.component';
import { LogoImageComponent } from './components/general/logo-image/logo-image.component';
import { InitPageComponent } from './components/init-page/init-page/init-page.component';
import { InitHomeComponent } from './components/init-page/init-home/init-home.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormsComponent } from './components/signup-frame/signup-forms/signup-forms.component';
import { SignupPageComponent } from './components/signup-frame/signup-page/signup-page.component';
import { TosComponent } from './components/signup-frame/tos/tos.component';
import { ValidationFromComponent } from './components/signup-frame/validation-from/validation-from.component';
import { BusStopComponent } from './components/home-page/bus-stop/bus-stop.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormsComponent,
    SignupPageComponent,
    TosComponent,
    ValidationFromComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    UpdatePasswordFormComponent,
    PasswordUpdatedDialogComponent,
    LogoImageComponent,
    InitPageComponent,
    InitHomeComponent,
    BusStopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
