import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/classes/video/video';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {
  videos: Video[] = [];
  category: String = "";
  searchCategory = "";

  constructor(private routerService: Router, private _videoService: VideoService) { }

  ngOnInit(): void {
    let url = this.routerService.url;
    this.category = url.substring(url.lastIndexOf('/') + 1);
    if(this.category === "all"){
      this.searchVideos("");
    }
    else{
      this._videoService.getCategories().subscribe((data: any) => {
      if(data.status == 200) {
        data.body.categories.forEach((element: any) => {
          if(element.display_name === this.category){
            this.searchVideos(element.name);
          }
        });
        
      }
    });
    }


  }

  selectVideo(selection: Video) {
    // TODO: this.routerService.navigate(['community/', selection.tid]);
  }


  private searchVideos(category: String): void{
    this._videoService.searchVideo("", category).subscribe((data: any)=>{
      if(data.status == 200){
        this.videos = data.body;
        console.log(this.videos);
      }
    });


  }

}
