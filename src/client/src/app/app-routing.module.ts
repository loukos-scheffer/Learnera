import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // default routing
  { path: '', component: LandingPageComponent },

  // { path: 'home', component: HomePageComponent },
  // { path: 'elearning', component: ELearningComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LandingPageComponent
  // HomePageComponent,
  // ELearningComponent,
  // NavigationPanelComponent
]