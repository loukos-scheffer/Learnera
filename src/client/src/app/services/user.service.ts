import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  login(user: User) {
    var url = "/api/user/login";

    return this.http.post(url, user).toPromise();
  }

  register(user: User) {
    var url = "/api/user/register";
    
    return this.http.post(url, user).toPromise();
  }
}
