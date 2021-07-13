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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommunityThreadsComponent } from 'src/app/modules/community/community-threads/community-threads.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommunityThreadComponent } from '../../modules/community/community-thread/community-thread.component';
import { CreateThreadDialogComponent } from 'src/app/modules/community/create-thread-dialog/create-thread-dialog.component';
import { UploadVideoDialogComponent } from '../../modules/learning/upload-video-dialog/upload-video-dialog.component';
import { VideoListComponent } from '../../modules/learning/learning-videos/learning-videos.component';
import { LearningVideoComponent } from '../../modules/learning/learning-video/learning-video.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    DefaultComponent,
    LearningComponent,
    HomeComponent,
    CommunityThreadsComponent,
    UserProfileComponent,
    CommunityThreadComponent,
    CreateThreadDialogComponent,
    UploadVideoDialogComponent,
    VideoListComponent,
    LearningVideoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})
export class DefaultModule { }