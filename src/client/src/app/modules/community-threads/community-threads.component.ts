import { Component, OnInit } from '@angular/core';
import { Thread } from 'src/app/classes/thread/thread';

@Component({
  selector: 'app-community-threads',
  templateUrl: './community-threads.component.html',
  styleUrls: ['./community-threads.component.scss']
})
export class CommunityThreadsComponent implements OnInit {

  tmpThreads = [
    new Thread("tid1","uid1","Example title","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 2","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title 3","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 4","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title 5","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 6","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title 7","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 8","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title 9","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 10","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title 11","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 2","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 2","Example body 2", new Date(), new Date(), 3),
    new Thread("tid1","uid1","Example title","Example body", new Date(), new Date(), 5),
    new Thread("tid2","uid3","Example title 2","Example body 2", new Date(), new Date(), 3)
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO, when search / get threads endpoint is created.

    // Get threads from server and set to tmpThreads
  }

  selectThread(selection: Thread) {
    // TODO: navigate to specific threads page
    console.log(selection);
  }

}
