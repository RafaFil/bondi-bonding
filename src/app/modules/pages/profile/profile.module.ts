import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DataViewComponent } from './components/data-view/data-view.component';
import { EditionFormComponent } from './components/edition-form/edition-form.component';
import { ProfileDescriptionComponent } from './components/profile-description/profile-description.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DataViewComponent,
    EditionFormComponent,
    ProfileDescriptionComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfileModule { }
