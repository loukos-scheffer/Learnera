import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/classes/thread/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';

@Component({
  selector: 'app-community-threads',
  templateUrl: './community-threads.component.html',
  styleUrls: ['./community-threads.component.scss']
})
export class CommunityThreadsComponent implements OnInit {

  tmpThreads: Thread[] = [];
  
  constructor(private _threadService: ThreadService) {}

  ngOnInit(): void {
    this._threadService.search("").subscribe((data:any) => {
      data.body.forEach((element:any) => {
        delete element._id;
      });
      this.tmpThreads = data.body;
    });
  }

  selectThread(selection: Thread) {
    console.log(selection);
  }

}
