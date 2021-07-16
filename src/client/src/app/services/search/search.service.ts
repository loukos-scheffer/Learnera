import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { ThreadService } from '../thread/thread.service';
import { VideoService } from '../video/video.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _threadService: ThreadService, private _videoService: VideoService) { }
  threadSearchResults: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  videoSearchResults: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public getVideoSearchResults$() {
    return this.videoSearchResults.asObservable();
  }
  
  public searchVideo(params: any, category: string) {
    this._videoService.searchVideo(params, category).subscribe((res: any) => {
      if(res.body === undefined) {
        this.videoSearchResults.next([]);
        return;
      }
      
      res?.body.forEach((element: any) => {
        delete element._id;
      });

      this.videoSearchResults.next(res?.body);
    });
  }  

  public getThreadSearchResults$() {
    return this.threadSearchResults.asObservable();
  }
  
  public searchThread(params: any) {
    this._threadService.search(params).subscribe((res: any) => {
      if(res.body === undefined) {
        this.threadSearchResults.next([]);
        return;
      }
      
      res?.body.forEach((element: any) => {
        delete element._id;
      });

      this.threadSearchResults.next(res?.body);
    });
  }  
}
