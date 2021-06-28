import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth/auth-guard.service';

import { DefaultComponent } from './layouts/default/default.component';
import { FullscreenComponent } from './layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { LearningComponent } from './modules/learning/learning.component';
import { UserProfileComponent } from './modules/user-profile/user-profile.component';
import { RegisterComponent } from './modules/register/register.component';
import { CommunityThreadsComponent } from './modules/community-threads/community-threads.component';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'learning',
        component: LearningComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'community',
        component: CommunityThreadsComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'auth', component: FullscreenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }