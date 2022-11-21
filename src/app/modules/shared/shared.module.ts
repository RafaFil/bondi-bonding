import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDialogComponent } from './components/base-dialog/base-dialog.component';
import { MapComponent } from './components/map/map.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SlidingSheetComponent } from './components/sliding-sheet/sliding-sheet.component';
import { TripFiltersFormComponent } from './components/trip-filters-form/trip-filters-form.component';
import { UserIconComponent } from './components/user/user-icon/user-icon.component';
import { UserInfoComponent } from './components/user/user-info/user-info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    BaseDialogComponent,
    MapComponent,
    NavbarComponent,
    SlidingSheetComponent,
    TripFiltersFormComponent,
    UserIconComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    BaseDialogComponent,
    MapComponent,
    NavbarComponent,
    SlidingSheetComponent,
    TripFiltersFormComponent,
    UserIconComponent,
    UserInfoComponent,
  ]
})
export class SharedModule { }
