import { SignupPageComponent } from './modules/pages/signup/pages/signup-page/signup-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqPageComponent } from './modules/pages/faqs/pages/faq-page/faq-page.component';
import { ChatsViewComponent } from './modules/pages/chat/pages/chats-view/chats-view.component';
import { ChatViewComponent } from './modules/pages/chat/pages/chat-view/chat-view.component';
import { ProfilePageComponent } from './modules/pages/profile/pages/profile-page/profile-page.component';
import { ValidateTokenGuard } from './modules/core/guards/validate-token.guard';
import { LandingPageComponent } from './modules/pages/landing/pages/landing-page/landing-page.component';

const valTokGuard = [ ValidateTokenGuard ]

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/landing/landing.module').then( m => m.LandingModule ),
  },
  {
    path: 'faq' ,
    loadChildren: () => import('./modules/pages/faqs/faqs.module').then( m => m.FaqsModule ),
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/pages/signup/signup.module').then( m => m.SignupModule ),
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then( m => m.HomeModule ),
    canLoad: [ ValidateTokenGuard ],
    canActivate: [ ValidateTokenGuard ]
  },
  {
    path: 'chat' ,
    loadChildren: () => import('./modules/pages/chat/chat.module').then( m => m.ChatModule ),
    canLoad: [ ValidateTokenGuard ],
    canActivate: [ ValidateTokenGuard ]
  },
  {
    path: 'profile' ,
    loadChildren: () => import('./modules/pages/profile/profile.module').then( m => m.ProfileModule ),
    canLoad: [ ValidateTokenGuard ],
    canActivate: [ ValidateTokenGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
