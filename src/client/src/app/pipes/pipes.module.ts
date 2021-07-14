import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeIdPipe } from './youtube-pipe/youtube-id.pipe';
import { SafePipe } from './safe/safe.pipe';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    YoutubeIdPipe,
    SafePipe
  ],
  imports: [
    CommonModule
  ],
  providers: [
    YoutubeIdPipe,
    SafePipe
  ],
  exports: [
    YoutubeIdPipe,
    SafePipe
  ]
})
export class PipesModule { }
