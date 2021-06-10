import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user/user';
import { UserService } from '../services/user/user.service';

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

  onRegister() {
    this._userService.register(this.registerUser).subscribe((data: any) => {
      if(data.status == 200) {
        this._userService.login(this.registerUser).subscribe((data2: any) => {
          if(data2.status == 200) {
            this.routerService.navigateByUrl("home");
          }
        })
      }
    });
  }

}
