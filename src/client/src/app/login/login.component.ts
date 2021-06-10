import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user/user';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loggingInUser = new User("", "", "", "");

  constructor(private _userService: UserService,
    private routerService: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this._userService.login(this.loggingInUser).subscribe((data: any) => {
      if(data.status == 200){
        this.routerService.navigateByUrl("home");
      }
    });
  }
}
