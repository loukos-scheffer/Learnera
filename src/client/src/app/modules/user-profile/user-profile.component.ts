import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser = new User("","", "", "");

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.me().subscribe((data: any) => {
      // console.log(data.body.body);
      this.currentUser.firstName = data.body.body.firstName;
      this.currentUser.lastName = data.body.body.lastName;
      this.currentUser.email = data.body.body.email;
    });
  }

  onClickUpdate() {
    this._userService.updateUser(this.currentUser).subscribe((data: any) => {
    });
  }

}
