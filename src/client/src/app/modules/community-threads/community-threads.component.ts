import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Thread } from 'src/app/classes/thread/thread';
import { SearchService } from 'src/app/services/search/search.service';
import { ThreadService } from 'src/app/services/thread/thread.service';
import { CreateThreadDialogComponent } from './create-thread-dialog/create-thread-dialog.component';

@Component({
  selector: 'app-community-threads',
  templateUrl: './community-threads.component.html',
  styleUrls: ['./community-threads.component.scss']
})
export class CommunityThreadsComponent implements OnInit {

  tmpThreads: Thread[] = [];

  constructor(private _threadService: ThreadService,
    private _searchService: SearchService,
    public dialog: MatDialog,
    private routerService: Router) { }

  ngOnInit(): void {
    this._searchService.getThreadSearchResults$().subscribe((data: any) => {

      data.forEach((element: any) => {
        if (element.body.length > 500) {
          element.body = element.body.substring(0, 500) + "...";
        }
      });
      this.tmpThreads = data;
    });
    this.getThreads();
  }

  selectThread(selection: Thread) {
    this.routerService.navigate(['community/', selection.tid]);
  }

  showCreateThreadForm() {
    const dialogRef = this.dialog.open(CreateThreadDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        this._threadService.post(new Thread("", "", result.title, result.body, new Date(), new Date(), 0)).subscribe(data => {
          this.getThreads();
        });
      }

    });
  }

  getThreads(): void {
    this._searchService.searchThread("");
  }
}
