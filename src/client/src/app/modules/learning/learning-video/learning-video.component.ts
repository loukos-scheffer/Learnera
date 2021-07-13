import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/classes/video/video';
import { LikeService } from 'src/app/services/like/like.service';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-learning-video',
  templateUrl: './learning-video.component.html',
  styleUrls: ['./learning-video.component.scss']
})
export class LearningVideoComponent implements OnInit {

  video: Video | null = null;
  currColor: String = "";
  vid: String = "";

  constructor(
    private routerService: Router,
    private _videoService: VideoService,
    private _likeService: LikeService,
  ) {}

  ngOnInit(): void {
    let url = this.routerService.url
    this.vid = url.substring(url.lastIndexOf('/') + 1);

    this.loadVideo();
    this.loadHasLiked();

  }

  loadVideo(): void {
    this._videoService.getVideo(this.vid).subscribe((data: any) => {
      if (data.status == 200){
        let video_info = data.body;
        delete video_info._id;
        this.video = video_info;
      }
    });
  }

  loadHasLiked(): void {
    this._likeService.hasLiked(this.vid).subscribe((data: any) => {
      if (data.status == 200){
        if(data.body){
          this.currColor = "accent";
        }else{
          this.currColor = "";
        }
      }
    });
  }

  onLike(): void {
    this._likeService.toggleLikeVideo(this.vid).subscribe((data: any) => {
      if (data.status == 200){
        this.loadVideo();
        this.loadHasLiked();
      }
    });
  }

  onComment(): void {
    // TODO:
  }
}
