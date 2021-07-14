import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import { ThreadService } from 'src/app/services/thread/thread.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTextVal = "";

  constructor(private _searchService: SearchService,
    private routerService: Router,
    public dialog: MatDialog,
    private _threadService: ThreadService) {}

  searchText(searchQuery:string) {

    this._searchService.searchThread(searchQuery);
  }

  clearText() {
    this.searchTextVal = "";
    this._searchService.searchThread("");
  }

  ngOnInit(): void {
    this.routerService.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.searchTextVal = "";
      }
    });
  }
}