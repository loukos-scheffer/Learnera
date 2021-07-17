import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../classes/user/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  currentUser: User | any;

  constructor(
    private _userService: UserService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this._userService.me().subscribe((data: any) => {
      if(data.status == 200) {
        delete data.body._id;
        this.currentUser = data.body;
      }
    });
  }

  onClickUpdate() {
    if(this.currentUser != null) {
      this._userService.updateUser(this.currentUser).subscribe((data: any) => {
        if(data.status != 200) {
          this.toastrService.clear();
          this.toastrService.error("Could not update user", "ERROR", {positionClass: "toast-bottom-right"});
        } else {
          this.toastrService.clear();
          this.toastrService.success("Succesfully updated user", "Success", {positionClass: "toast-bottom-right"});
        }
      });
    }
  }
}
