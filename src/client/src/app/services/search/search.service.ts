import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { ThreadService } from '../thread/thread.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _threadService: ThreadService) { }
  threadSearchResults: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

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
