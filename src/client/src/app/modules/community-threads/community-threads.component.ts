import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Thread } from 'src/app/classes/thread/thread';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { CreateThreadDialogComponent } from './create-thread-dialog/create-thread-dialog/create-thread-dialog.component';

@Component({
  selector: 'app-community-threads',
  templateUrl: './community-threads.component.html',
  styleUrls: ['./community-threads.component.scss']
})
export class CommunityThreadsComponent implements OnInit {

  tmpThreads: Thread[] = [];
  
  constructor(private _threadService: ThreadService, 
    public dialog: MatDialog,
    private routerService: Router) {}

  ngOnInit(): void {
    this.getThreads();
  }

  selectThread(selection: Thread) {
    this.routerService.navigate(['community/', selection.tid]);
  }

  showCreateThreadForm(){
    const dialogRef = this.dialog.open(CreateThreadDialogComponent, {
      width: '500px',
      // data: {title: this.title, body: this.body}
    });

    dialogRef.afterClosed().subscribe(result2 => {
      let result = result2;
      this._threadService.post(new Thread("", "", result.title, result.body, new Date(), new Date(), 0)).subscribe(data => {
        this.getThreads();
      });
    });
  }

  getThreads(){
    this._threadService.search("").subscribe((data:any) => {
      data.body.forEach((element:any) => {
        delete element._id;
      });
      this.tmpThreads = data.body;
    });
  }

}
