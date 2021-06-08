import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // default routing
  { path: '', component: LoginComponent },

  { path: 'home', component: LandingPageComponent },
  // { path: 'elearning', component: ELearningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LandingPageComponent,
  LoginComponent
]