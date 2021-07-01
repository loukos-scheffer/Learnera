import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    console.log("josh is here");
    console.log(this.routerService.url);

    let url = this.routerService.url
    let tid = url.substring(url.lastIndexOf('/') + 1);
    this._threadService.getThread(tid).subscribe((data: any) => {
      if (data.status == 200){
        let thread_info = data.body;
        delete thread_info._id;
        this.thread = thread_info;
        console.log(this.thread);
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
