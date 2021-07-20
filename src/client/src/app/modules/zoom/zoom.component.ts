import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ZoomMtg } from '@zoomus/websdk';
import { ZoomService } from 'src/app/services/zoom/zoom.service';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';


ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load('en-US');
ZoomMtg.i18n.reload('en-US');


/* Example to route to this page with parameters. parameter roomNumber should be set.
<a routerLink="{{route.path}}" [queryParams]="route.params" mat-list-item>
  <span mat-line>{{route.text}}</span>
</a>
*/
@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  // setup your signature endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
  apiKey = '6Dv-V5LvQoueNe_kwjTddw';
  meetingNumber = 0;
  role = 0;
  leaveUrl = 'http://localhost:4200';
  userName = "";
  userEmail = "";
  passWord = "";

  constructor(
    private _zoomService: ZoomService,
    private _userService: UserService,
    public httpClient: HttpClient, 
    private route: ActivatedRoute,
    @Inject(DOCUMENT) document: any
  ) {}

  ngOnInit() {
    this._userService.me().subscribe((data: any) => {
      if(data.status == 200) {
        delete data.body._id;
        this.userName = data.body.firstName + " " + data.body.lastName;
      }
    });

    this.route.queryParams.subscribe((params: any) => {
      this.meetingNumber = params.meetingNumber;
    });
  }

  getSignature() {
    this._zoomService.getSignature(this.meetingNumber, 0).toPromise().then((data: any) => {
      if(data.body.signature) {
        this.startMeeting(data.body.signature)
      } else {
        console.log(data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  startMeeting(signature: any) {
    const doc = document.getElementById('zmmtg-root');
      
    if(doc !=null) {
      doc.style.display = 'block';
    }

    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      isSupportAV: true,
      success: (success: any) => {
        console.log(success)
        ZoomMtg.join({
          signature: signature,
          meetingNumber: this.meetingNumber,
          userName: this.userName,
          apiKey: this.apiKey,
          userEmail: this.userEmail,
          passWord: this.passWord,
          success: (success: any) => {
            console.log("SUCESS");
            console.log(success)
          },
          error: (error: any) => {
            console.log(error)
            console.log("FAILEDDD");

          }
        })

      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

}
