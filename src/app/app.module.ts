import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoImageComponent } from './components/general/logo-image/logo-image.component';
import { InitHomeComponent } from './components/init-home/init-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoImageComponent,
    InitHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
