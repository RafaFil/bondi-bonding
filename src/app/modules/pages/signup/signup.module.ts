import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { SignupFormsComponent } from './components/signup-forms/signup-forms.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TosComponent } from './components/tos/tos.component';
import { IdValidationFormComponent } from './components/id-validation-form/id-validation-form.component';

@NgModule({
  declarations: [
    SignupFormsComponent,
    SignupPageComponent,
    TosComponent,
    IdValidationFormComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
