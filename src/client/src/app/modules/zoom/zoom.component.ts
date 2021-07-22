import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

import { ZoomMtg } from '@zoomus/websdk';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { ConferenceService } from 'src/app/services/conference/conference.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  zoomLink = "";
  conId = "";
  meetingNumber = 0;
  leaveUrl = 'http://localhost:4200';
  userName = "";
  password = "";

  constructor(
    private _conferenceService: ConferenceService,
    private _userService: UserService,
    public httpClient: HttpClient, 
    private route: ActivatedRoute,
    @Inject(DOCUMENT) document: any
  ) {}

  ngOnInit() {
    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareJssdk();
    // loads language files, also passes any error messages to the ui
    ZoomMtg.i18n.load('en-US');
    ZoomMtg.i18n.reload('en-US');
    this._userService.me().subscribe((data: any) => {
      if(data.status == 200) {
        delete data.body._id;
        this.userName = data.body.firstName + " " + data.body.lastName;
      }
    });

    this.route.queryParams.subscribe((params: any) => {
      this.conId = params.conId;
      this._conferenceService.getConference(this.conId).subscribe((data: any) => {
        if(data.status == 200) {
          this.meetingNumber = data.body.meetingId;
          this.password = data.body.passcode;
          this.zoomLink = data.body.zoomLink;
          console.log(data.body);
        }
      });
    });
  }

  getSignature() {
    this._conferenceService.getSignature(this.meetingNumber, 0).toPromise().then((data: any) => {
      if(data.body.signature) {
        this.startMeeting(data.body.signature);
      } else {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    })
  }

  startMeeting(signature: any) {
    const doc = document.getElementById('zmmtg-root');
      
    if(doc !=null) {
      doc.style.display = 'block';
    }

    ZoomMtg.init({
      leaveUrl: this.leaveUrl,
      success: (success: any) => {
        console.log(success);
        ZoomMtg.join({
          signature: signature,
          meetingNumber: 83786378532 ,
          userName: this.userName,
          apiKey: '6Dv-V5LvQoueNe_kwjTddw',
          userEmail: "",
          passWord: "dENK3E",
          success: (success: any) => {
            console.log(success);
          },
          error: (error: any) => {
            console.log(error);
          }
        })
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
