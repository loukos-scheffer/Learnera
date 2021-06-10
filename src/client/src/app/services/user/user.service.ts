import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../../classes/user/user';
import { RestApiService } from '../rest-api/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient,
    private _restApiService: RestApiService) { }

  login(user: User): Observable<{}> {
    var url = "/api/user/login";
    
    return this.http.post(url, user, {observe: 'response'}).pipe(
      map(this._restApiService.getData),
      catchError(err => this._restApiService.handleError(err))
    );
  }

  register(user: User): Observable<{}> {
    var url = "/api/user/register";

    return this.http.post(url, user, {observe: 'response'}).pipe(
      map(this._restApiService.getData),
      catchError(err => this._restApiService.handleError(err))
    );
  }
}
