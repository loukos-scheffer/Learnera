import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Video } from 'src/app/classes/video/video';

@Component({
  selector: 'app-upload-video-dialog',
  templateUrl: './upload-video-dialog.component.html',
  styleUrls: ['./upload-video-dialog.component.scss']
})
export class UploadVideoDialogComponent implements OnInit {

  content = {"title":"", "body":"", "url":"", "categories":["All"]};
  categories: FormGroup;
  //"Business", "Finance & Accounting", "IT & Software", "Personal Development", "Marketing", "Teaching & Academics"
  constructor(
    public dialogRef: MatDialogRef<UploadVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Video, fb: FormBuilder) {
      this.categories = fb.group({
        "Business": false,
        "Finance & Accounting": false,
        "IT & Software": false,
        "Personal Development": false,
        "Marketing": false,
        "Teaching & Academics": false
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onCategoryChange(ob: MatCheckboxChange, category: string) {
    if(ob.checked){
      this.content.categories.push(category);
    } else {
      let index = this.content.categories.indexOf(category);
      if (index > -1) {
        this.content.categories.splice(index, 1);
      }
    }
    console.log("checked: " + ob.checked);
 } 

  ngOnInit(): void {
  }

}
