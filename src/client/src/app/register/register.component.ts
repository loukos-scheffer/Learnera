import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUser = new User("","", "", "");

  constructor(private _userService: UserService,
    private routerService: Router) { }

  ngOnInit(): void {
  }

  async onRegister() {
    try {
      let res:any = await this._userService.register(this.registerUser);

      if(res.statusCode == 200){
        this.routerService.navigateByUrl("home");
      }

    } catch(e) {
      console.log('err');
      console.log(e);
    }
  }

}
