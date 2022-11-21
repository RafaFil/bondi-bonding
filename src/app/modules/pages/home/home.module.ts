import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StopMapComponent } from './components/stop-map/stop-map/stop-map.component';
import { StopContentComponent } from './components/stop-content/stop-content/stop-content.component';
import { SearchButtonComponent } from './components/search/search-button/search-button.component';
import { SearchComponent } from './components/search/search/search.component';
import { FiltersModalContentComponent } from './components/search/filters-modal-content/filters-modal-content.component';
import { SearchFiltersModalComponent } from './components/search/search-filters-modal/search-filters-modal.component';
import { SearchFormComponent } from './components/search/search-form/search-form.component';
import { SearchResultContentComponent } from './components/search/search-result-content/search-result-content.component';
import { CreateTripButtonComponent } from './components/create-trip/create-trip-button/create-trip-button.component';
import { CreateTripComponent } from './components/create-trip/create-trip/create-trip.component';
import { CreateTripFiltersModalComponent } from './components/create-trip/create-trip-filters-modal/create-trip-filters-modal.component';
import { CreateTripFormComponent } from './components/create-trip/create-trip-form/create-trip-form.component';
import { BusStopComponent } from './components/stop-map/bus-stop/bus-stop.component';
import { UserStopItemComponent } from './components/stop-map/user-stop-item/user-stop-item.component';
import { UserStopItemGroupComponent } from './components/stop-map/user-stop-item-group/user-stop-item-group.component';
import { HomeStopMapComponent } from './components/home-stop-map/home-stop-map.component';
import { StopContentHeaderComponent } from './components/stop-content/stop-content-header/stop-content-header.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StopMapComponent,
    StopContentComponent,
    StopContentHeaderComponent,
    SearchButtonComponent,
    SearchComponent,
    FiltersModalContentComponent,
    SearchFiltersModalComponent,
    SearchFormComponent,
    SearchResultContentComponent,
    CreateTripButtonComponent,
    CreateTripComponent,
    CreateTripFiltersModalComponent,
    CreateTripFormComponent,
    BusStopComponent,
    UserStopItemComponent,
    UserStopItemGroupComponent,
    HomeStopMapComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
