import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

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
import { BusStopComponent } from './components/general/stop-map/bus-stop/bus-stop.component';
import { MapComponent } from './components/general/map/map.component';
import { SearchButtonComponent } from './components/general/search/search-button/search-button.component';
import { SearchComponent } from './components/general/search/search.component';
import { SearchFormComponent } from './components/general/search/search-form/search-form.component';
import { TripFiltersFormComponent } from './components/general/trip-filters-form/trip-filters-form.component';
import { SearchFiltersModalComponent } from './components/general/search/search-filters-modal/search-filters-modal.component';
import { FiltersModalContentComponent } from './components/general/filters-modal-content/filters-modal-content.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { HomeStopMapComponent } from './components/home-page/home-stop-map/home-stop-map.component';
import { SlidingSheetComponent } from './components/general/sliding-sheet/sliding-sheet.component';
import { UserIconComponent } from './components/general/user/user-icon/user-icon.component';
import { UserInfoComponent } from './components/general/user/user-info/user-info.component';
import { UserStopItemComponent } from './components/general/stop-map/user-stop-item/user-stop-item.component';
import { UserStopItemGroupComponent } from './components/general/stop-map/user-stop-item-group/user-stop-item-group.component';
import { StopContentComponent } from './components/home-page/stop-content/stop-content.component';
import { StopContentHeaderComponent } from './components/home-page/stop-content-header/stop-content-header.component';
import { StopMapComponent } from './components/general/stop-map/stop-map/stop-map.component';
import { SearchResultContentComponent } from './components/general/search/search-result-content/search-result-content.component';
import { CreateTripButtonComponent } from './components/general/create-trip/create-trip-button/create-trip-button.component';
import { CreateTripComponent } from './components/general/create-trip/create-trip.component';
import { CreateTripFiltersModalComponent } from './components/general/create-trip/create-trip-filters-modal/create-trip-filters-modal.component';
import { CreateTripFormComponent } from './components/general/create-trip/create-trip-form/create-trip-form.component';
import { FaqPageComponent } from './components/faq-page/faq-page/faq-page.component'
import { FaqAccordionComponent } from './components/faq-page/faq-accordion/faq-accordion.component'
import { NavbarComponent } from './components/general/navbar/navbar.component';
import { SpeechBubbleComponent } from './components/chat-page/speech-bubble/speech-bubble.component';
import { ChatFeedComponent } from './components/chat-page/chat-feed/chat-feed.component';
import { ChatFeedHeaderComponent } from './components/chat-page/chat-feed-header/chat-feed-header.component';
import { ChatViewComponent } from './components/chat-page/chat-view/chat-view.component';


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
    BusStopComponent,
    SearchButtonComponent,
    SearchFormComponent,
    SearchComponent,
    SearchFiltersModalComponent,
    TripFiltersFormComponent,
    FiltersModalContentComponent,
    HomePageComponent,
    MapComponent,
    StopMapComponent,
    HomeStopMapComponent,
    SlidingSheetComponent,
    UserIconComponent,
    UserInfoComponent,
    UserStopItemComponent,
    UserStopItemGroupComponent,
    StopContentComponent,
    StopContentHeaderComponent,
    SearchResultContentComponent,
    CreateTripButtonComponent,
    CreateTripComponent,
    CreateTripFiltersModalComponent,
    CreateTripFormComponent,
    FaqPageComponent,
    FaqAccordionComponent,
    NavbarComponent,
    SpeechBubbleComponent,
    ChatFeedComponent,
    ChatFeedHeaderComponent,
    ChatViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
