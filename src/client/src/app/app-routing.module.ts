import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // default routing
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: UserProfileComponent },


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
  LoginComponent,
  RegisterComponent,
  UserProfileComponent
]