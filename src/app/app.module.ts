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

@NgModule({
  declarations: [
    AppComponent,
    LogoImageComponent,
    InitHomeComponent,
    SignupFormsComponent,
    SignupPageComponent
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
