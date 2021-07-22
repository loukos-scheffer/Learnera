import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/classes/comment/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input()
  id:String = "";
  body = "";
  comments:Comment[] = [];

  constructor(private _commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  postComment(): void{
    this._commentService.post(new Comment("", this.id, "", "", "", "", this.body, new Date(), 0)).subscribe((data: any) =>{
      this.body = "";
      this.getComments();
    });
  }

  getComments(): void{
    this._commentService.getComments(this.id).subscribe((data: any) =>{
      if (data.status == 200) {
        this.comments = data.body;
      }
    });
  }

}
