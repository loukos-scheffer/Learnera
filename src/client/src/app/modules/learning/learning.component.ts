import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  categories = [];
  constructor(private _videoservice: VideoService) { }

  ngOnInit(): void {
    this._videoservice.getCategories().subscribe((data: any) => {
      if(data.status == 200) {
        this.categories = data.body.categories;
      }
    });
  }
}
