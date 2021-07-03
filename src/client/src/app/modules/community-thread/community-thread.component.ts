import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Thread } from 'src/app/classes/thread/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';

@Component({
  selector: 'app-community-thread',
  templateUrl: './community-thread.component.html',
  styleUrls: ['./community-thread.component.scss']
})
export class CommunityThreadComponent implements OnInit {

  thread: Thread | null = null;
  constructor(private routerService: Router, 
    private _threadService: ThreadService) { }

  ngOnInit(): void {
    // router server read the url string, then find the 
    let url = this.routerService.url
    let tid = url.substring(url.lastIndexOf('/') + 1);
    this._threadService.getThread(tid).subscribe((data: any) => {
      if (data.status == 200){
        let thread_info = data.body;
        delete thread_info._id;
        this.thread = thread_info;
      }

    });

  }

  onLike(): void {
    // later
  }

  onComment(): void{
    // Haiyang todo
  }
}
