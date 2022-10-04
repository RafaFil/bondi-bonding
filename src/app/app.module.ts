import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InitHomeComponent } from './components/init-home/init-home.component';
import { LogoImageComponent } from './components/general/logo-image/logo-image.component';
import { SignupFormsComponent } from './components/signup-frame/signup-forms/signup-forms.component';
import { SignupPageComponent } from './components/signup-frame/signup-page/signup-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TosComponent } from './components/signup-frame/tos/tos.component';
import { ValidationFromComponent } from './components/signup-frame/validation-from/validation-from.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LogoImageComponent,
    InitHomeComponent,
    SignupFormsComponent,
    SignupPageComponent,
    TosComponent,
    ValidationFromComponent,
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
