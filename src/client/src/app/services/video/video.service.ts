import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Video } from 'src/app/classes/video/video';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient,
    private _restApiService: RestApiService) { 
    }
    
    getCategories(): Observable<{}> {
      var url = "/api/video/get-categories";
  
      return this.http.get(url, {observe: 'response'}).pipe(
        map(this._restApiService.getData),
        catchError(err => this._restApiService.handleError(err))
      );
    }

    upload(video: Video): Observable<{}> {
      var url = "/api/video/upload";
  
      return this.http.post(url, video, {observe: 'response'}).pipe(
        map(this._restApiService.getData),
        catchError(err => this._restApiService.handleError(err))
      );
    }
}
