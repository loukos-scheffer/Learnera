import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/classes/user/user';
import { ThreadsService } from '../threads/threads.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _threadService: ThreadsService) { }
  //private results = new BehaviorSubject([]);
  results: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  public getResults$(){
    return this.results.asObservable();
  }
  public search(params: any){
    //do search and add results to 'results'
    const result : string[] = [];
    this._threadService.searchThread(params).subscribe((res: any) => {
      this.results.next(res.body);
    });
  }
}
