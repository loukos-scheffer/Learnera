import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { ThreadsService } from '../threads/threads.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _threadService: ThreadsService) { }
  threadSearchResults: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public getThreadSearchResults$() {
    return this.threadSearchResults.asObservable();
  }
  public searchThread(params: any) {
    this._threadService.searchThread(params).subscribe((res: any) => {
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
