import { SignupPageComponent } from './components/signup-frame/signup-page/signup-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './components/faq-page/faq-page/faq-page.component';
import { InitHomeComponent } from './components/init-page/init-home/init-home.component';
import { InitPageComponent } from './components/init-page/init-page/init-page.component';
import { LoginFormComponent } from './components/init-page/login-form/login-form.component';
import { ResetPasswordFormComponent } from './components/init-page/reset-password-form/reset-password-form.component';
import { UpdatePasswordFormComponent } from './components/init-page/update-password-form/update-password-form.component';
import { HomePageComponent } from './components/home-page/home-page/home-page.component';
import { ChatsViewComponent } from './components/chats-section/chats-view/chats-view.component';
import { ChatViewComponent } from './components/chat-page/chat-view/chat-view.component';
import { ProfilePageComponent } from './components/profile-page/profile-page/profile-page.component';
import { ValidateTokenGuard } from './guards/validate-token.guard';

const valTokGuard = [ ValidateTokenGuard ]

const routes: Routes = [
  { path: '', redirectTo: '/init/home', pathMatch: 'full' },
  { path: 'init', component: InitPageComponent, children: [
    { path: '', redirectTo: '/init/home', pathMatch: 'full' },
    { path: 'home', component: InitHomeComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'resetPassword', component: ResetPasswordFormComponent },
    { path: 'updatePassword', component: UpdatePasswordFormComponent },
  ]},
  { path: 'home', component: HomePageComponent, canLoad: valTokGuard, canActivate: valTokGuard },
  { path: 'signup', component: SignupPageComponent },
  { path: 'faq' , component: FaqPageComponent },
  { path: 'chat' , component: ChatsViewComponent, canLoad: valTokGuard, canActivate: valTokGuard },
  { path: 'chat/:chatId', component: ChatViewComponent, canLoad: valTokGuard, canActivate: valTokGuard },
  { path: 'profile/:username', component: ProfilePageComponent, canLoad: valTokGuard, canActivate: valTokGuard },
  { path: 'profile', component: ProfilePageComponent, canLoad: valTokGuard, canActivate: valTokGuard }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
