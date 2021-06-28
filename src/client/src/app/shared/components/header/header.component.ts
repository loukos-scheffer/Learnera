import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchQuery = "";
  constructor(private routerService: Router, private _searchService: SearchService) {
    
  }
  search(t: any){
    this._searchService.search(this.searchQuery);
  }
  ngOnInit(): void {
    console.log(this.routerService.getCurrentNavigation());
    
  }

}
