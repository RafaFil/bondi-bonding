import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ResetPasswordFormComponent,
    UpdatePasswordFormComponent,
    PasswordUpdatedDialogComponent,
    LogoImageComponent,
    InitPageComponent,
    InitHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
