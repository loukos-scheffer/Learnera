import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from 'src/app/classes/thread/thread';
import { LikeService } from 'src/app/services/like/like.service';
import { ThreadService } from 'src/app/services/thread/thread.service';

@Component({
  selector: 'app-community-thread',
  templateUrl: './community-thread.component.html',
  styleUrls: ['./community-thread.component.scss']
})
export class CommunityThreadComponent implements OnInit {

  thread: Thread | null = null;
  currColor: String = "";
  tid: String = "";
  constructor(private routerService: Router, 
    private _threadService: ThreadService, private _likeService: LikeService) { }

  ngOnInit(): void {
    // router server read the url string, then find the 
    let url = this.routerService.url
    this.tid = url.substring(url.lastIndexOf('/') + 1);
    this.loadLikeCount();
    this.loadHasLiked();
  }

  loadLikeCount(): void {
    this._threadService.getThread(this.tid).subscribe((data: any) => {
      if (data.status == 200){
        let thread_info = data.body;
        delete thread_info._id;
        this.thread = thread_info;
      }
    });

  }

  loadHasLiked(): void {
    this._likeService.hasLiked(this.tid).subscribe((data: any) => {
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
    this._likeService.toggleLikeThread(this.tid).subscribe((data: any) => {
      if (data.status == 200){
        this.loadLikeCount();
        this.loadHasLiked();
      }
    });
  }

  onComment(): void{
    // Haiyang todo
  }
}
