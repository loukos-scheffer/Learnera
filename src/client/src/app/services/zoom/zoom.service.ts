import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {

  constructor(
    private http: HttpClient,
    private _restApiService: RestApiService
  ) { }

  getSignature(meetingNumber: number, role: number): Observable<{}> {
    var url = "/api/zoom/signature";

    return this.http.post(url, {"meetingNumber": meetingNumber, "role": role}, {observe: 'response'}).pipe(
      map(this._restApiService.getData),
      catchError(err => this._restApiService.handleError(err))
    );
  }

}
