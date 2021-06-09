import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user/user';
import { UserService } from '../services/user.service';

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

  async onLogin() {
    try {
      let res:any = await this._userService.login(this.loggingInUser);

      if(res.statusCode == 200){
        this.routerService.navigateByUrl("home");
      }

    }catch(e) {
      console.log('err');
      console.log(e);
    }
  }
}
