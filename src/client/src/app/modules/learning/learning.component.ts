import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Video } from 'src/app/classes/video/video';
import { VideoService } from 'src/app/services/video/video.service';
import { UploadVideoDialogComponent } from './upload-video-dialog/upload-video-dialog.component';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  categories = [];
  constructor(private _videoservice: VideoService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._videoservice.getCategories().subscribe((data: any) => {
      if(data.status == 200) {
        this.categories = data.body.categories;
      }
    });
  }

  showUploadVideoForm() {
    const dialogRef = this.dialog.open(UploadVideoDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result2 => {
      let result = result2;
      this._videoservice.upload(new Video("", "", result.title, result.body, result.url, result.categories, new Date(), 0)).subscribe(data => {
        // this.ngOnInit();
        // console.log("made a video");
        // console.log(result2.categories);
      });
    });
  }
}
