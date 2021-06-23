import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { LearningComponent } from 'src/app/modules/learning/learning.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { UserProfileComponent } from 'src/app/modules/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
// import { CommunityComponent } from 'src/app/community/community.component';



@NgModule({
  declarations: [
    DefaultComponent,
    LearningComponent,
    HomeComponent,
    // CommunityComponent
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class DefaultModule { }