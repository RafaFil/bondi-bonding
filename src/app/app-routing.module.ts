import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitHomeComponent } from './components/init-page/init-home/init-home.component';
import { InitPageComponent } from './components/init-page/init-page/init-page.component';
import { LoginFormComponent } from './components/init-page/login-form/login-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/init/home', pathMatch: 'full' },
  { path: 'init', component: InitPageComponent, children: [
    { path: '', redirectTo: '/init/home', pathMatch: 'full' },
    { path: 'home', component: InitHomeComponent },
    { path: 'login', component: LoginFormComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
