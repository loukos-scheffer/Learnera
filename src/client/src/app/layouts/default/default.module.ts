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
import { CommunityThreadsComponent } from 'src/app/modules/community-threads/community-threads.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityThreadComponent } from '../../modules/community-thread/community-thread.component';
import { CreateThreadDialogComponent } from 'src/app/modules/community-threads/create-thread-dialog/create-thread-dialog/create-thread-dialog.component';

@NgModule({
  declarations: [
    DefaultComponent,
    LearningComponent,
    HomeComponent,
    CommunityThreadsComponent,
    UserProfileComponent,
    CommunityThreadComponent,
    CreateThreadDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class DefaultModule { }
