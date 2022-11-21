import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateTokenGuard } from './modules/core/guards/validate-token.guard';

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
