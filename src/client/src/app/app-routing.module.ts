import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { ELearningComponent } from './e-learning/e-learning.component';
import { EditProfileComponent} from './edit-profile/edit-profile.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // default routing
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'e-learning', component: ELearningComponent},
  { path: 'community', component: CommunityComponent},
  { path: 'edit-profile', component: EditProfileComponent},


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
  RegisterComponent
]