import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  constructor(private http: HttpClient,
    private _restApiService: RestApiService) { }

  searchThread(query: string): Observable<{}> {
    var url = "/api/thread/search";

    return this.http.post(url, {"query": query}, {observe: 'response'}).pipe(
      map(this._restApiService.getData),
      catchError(err => this._restApiService.handleError(err))
    );
  }
}
