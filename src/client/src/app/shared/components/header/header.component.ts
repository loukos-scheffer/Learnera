import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';
import { VideoService } from 'src/app/services/video/video.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTextVal = "";
  menu = "";
  constructor(private _searchService: SearchService,
    private routerService: Router,
    public dialog: MatDialog,
    private _videoService: VideoService,
    private _userService: UserService
  ) {}
    
  searchText(searchQuery:string) {

    if(this.routerService.url.split('/')[1] == "learning"){
      this.searchVideoHelper(searchQuery);
    }
    else {
      this._searchService.searchThread(searchQuery);
    }

  }

  clearText() {
    this.searchTextVal = "";
    this.searchText("");
  }

  ngOnInit(): void {
    this.routerService.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        this.searchTextVal = "";
      }
    });
  }

  searchVideoHelper(searchQuery: string): void {
    let url = this.routerService.url;
    let category = url.substring(url.lastIndexOf('/') + 1);

    this._videoService.getCategories().subscribe((data: any) => {
      if(data.status == 200) {
        if (category = "all") {
            this._searchService.searchVideo(searchQuery, "");
          }
        else{
          data.body.categories.forEach((element: any) => {
            if(element.display_name === category){
              this._searchService.searchVideo(searchQuery, element.name);
              return;
            }
          });
        }
      }
    });
  }
  onClickAccount(): void {
    this.routerService.navigate(['account' ]);
  }

  onClickLogout(): void {
    this._userService.logout().subscribe((data: any) => {
      console.log(data);
      if(data.status == 200){
        window.location.reload();
      }
    });
  }
}