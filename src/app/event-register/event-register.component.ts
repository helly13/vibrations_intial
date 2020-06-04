import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvntService } from '../services/evnt.service';
import { SessionStorageService } from 'angular-web-storage';

export class participants {
  constructor(
    public event: string,
    public email: string,
    public institute: string,
    public phone: string,
    public team?: string,
    public team_size?: number
  ) {}
}

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.css'],
})
export class EventRegisterComponent implements OnInit {
  Email_id: string;
  Name: string;
  Mobile: string;
  Colleage_Name: string;
  Team_Name: string;
  Team_Size: number;
  Rules_check: boolean = false;
  Event_Name: string;
  Event_Details: any[] = [];
  pdf_file: any;
  team_flag: boolean;
  clg_flag: boolean;
  teamList: any[] = [];
  student_id: any;


  constructor(
    private _formBuilder: FormBuilder,
    private act_router: ActivatedRoute,
    private _router: Router,
    private evnt_ser: EvntService,
    private sessionst: SessionStorageService
  ) {}

  ngOnInit(): void {
    this.Event_Name = this.act_router.snapshot.params['name'];
    this.Email_id = this.sessionst.get('email_id');

    this.evnt_ser
      .getEventDetailsByEventName(this.Event_Name)
      .subscribe((data: any[]) => {
        // console.log(data);
        // console.log(data[0].Sub_Events.pdf);
        this.Event_Details.push(data[0].Sub_Events);
        this.teamList = data[0].Sub_Events.team;
        // console.log(this.Event_Details[0].pdf);
        this.pdf_file = 'http://localhost:3000/' + this.Event_Details[0].pdf;
        // console.log(this.teamList)
        // console.log(this.teamList[0].name);

        // console.log(data[0].Sub_Events.teamstatus);
        // console.log(this.Event_Details[0].teamstatus);
        if (
          this.Event_Details[0].teamststus == '' ||
          this.Event_Details[0].teamstatus == null
        ) {
          this.team_flag = false;
        } else {
          // console.log("teamstatus")
          this.team_flag = true;
        }
      });

    this.evnt_ser
      .getStudentDetailsById(this.Email_id)
      .subscribe((data: any) => {
        // console.log(data);
        this.Name = data[0].name;
        this.student_id = data[0]._id;
        this.Mobile = data[0].contact;
        if (data[0].stu_status == 'on') {
          this.Colleage_Name = 'BIT';
          this.clg_flag = true;
        } else {
          this.clg_flag = false;
        }
      });
  }

  onKeyPressText(event: any) {
    // console.log(event);
    if ((event.charCode >= 65 && event.charCode < 90) || event.key == ' ') {
    } else if (
      (event.charCode >= 97 && event.charCode <= 122) ||
      event.key == ' '
    ) {
    } else {
      event.preventDefault();
    }
  }

  onKeyPressNumber(event: any) {
    // console.log(event);
    if (event.charCode >= 48 && event.charCode <= 57) {
    } else {
      event.preventDefault();
    }
  }

  onRegister() {
    // console.log('Register Clicked');
    var flag = 0;
    const already_participated:any = 'You have already participated in this event';
    const successfully_participated:any =
      'Your participation request is sucessfully accepted';
    const successfully_team_participated:any =
      'Your participation request as team is sucessfully accepted';

    if (this.team_flag) {
      for (let i = 0; i < this.teamList.length; i++) {
        if (
          this.Team_Name.toLocaleLowerCase().trim() ==
          this.teamList[i].name.toLocaleLowerCase().trim()
        ) {
          flag = 1;
        }
      }
      if (flag == 0) {
        this.evnt_ser
          .eventRegisteration(
            new participants(
              this.Event_Name,
              this.Email_id,
              this.Colleage_Name,
              this.Mobile,
              this.Team_Name,
              this.Team_Size
            )
          )
          .subscribe((data: any[]) => {
            console.log(data);
            if (data == already_participated) {
              alert('You have already participated in this event');
              this._router.navigate(['/event']);
            }
            if (data == successfully_team_participated) {
              alert(
                'Your participation request as team is sucessfully accepted'
              );
              this._router.navigate(['/event']);
            }
          });
      } else {
        alert('Team name is already taken please write another team name');
      }
    } else {
      this.evnt_ser
        .eventRegisteration(
          new participants(
            this.Event_Name,
            this.Email_id,
            this.Colleage_Name,
            this.Mobile
          )
        )
        .subscribe((data: any[]) => {
          console.log(data);
          if (data == already_participated) {
            alert('You have already participated in this event');
            this._router.navigate(['/event']);
          }
          if (data == successfully_participated) {
            alert('Your participation request is sucessfully accepted');
            this._router.navigate(['/event']);
          }
        });
    }
  }

  onBack() {
    this._router.navigate(['/event']);
  }
  saveDetails(NgForm) {}
}
