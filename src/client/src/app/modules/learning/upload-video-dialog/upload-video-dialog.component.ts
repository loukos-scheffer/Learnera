import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/classes/video/video';
import { VideoService } from 'src/app/services/video/video.service';

interface Content{
  title: string;
  body: string;
  url: string;
  categories: string[];
}

@Component({
  selector: 'app-upload-video-dialog',
  templateUrl: './upload-video-dialog.component.html',
  styleUrls: ['./upload-video-dialog.component.scss']
})
export class UploadVideoDialogComponent implements OnInit {

  content : Content = {"title":"", "body":"", "url":"", "categories": []};
  categoriesList: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<UploadVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video, 
    private _videoService: VideoService ) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCategoryChange(ob: MatCheckboxChange, category: any) {
    if(ob.checked){
      this.content.categories.push(category.name);
    } else {
      let index = this.content.categories.indexOf(category.name);
      if (index > -1) {
        this.content.categories.splice(index, 1);
      }
    }
    
 } 

 ngOnInit(): void {
  this._videoService.getCategories().subscribe((data: any) => {
    if(data.status == 200) {
      this.categoriesList = data.body.categories;
      let index = this.categoriesList.indexOf("All");
      if (index > -1) {
        this.categoriesList.splice(index, 1);
      }
    }
    
  });
}

}
