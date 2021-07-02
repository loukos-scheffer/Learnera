import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient,
    private _restApiService: RestApiService) { 
    }
    
    getCategories(): Observable<{}> {
      var url = "/api/videos/get-categories";
  
      return this.http.get(url, {observe: 'response'}).pipe(
        map(this._restApiService.getData),
        catchError(err => this._restApiService.handleError(err))
      );
    }
}
