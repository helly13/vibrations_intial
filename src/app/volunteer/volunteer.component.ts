import { Component, OnInit, Inject } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EvntService } from '../services/evnt.service';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
})
export class VolunteerComponent implements OnInit {
  Experience: string;
  Event_Name: string;
  Email: any;
  Volunteer_Status: any;
  flag_applied: any = 'already_aplied';
  flag_limt: any = 'already_aplied to limit';
  flag: boolean = false;
  word_count: number = 0;

  constructor(
    private evnt_ser: EvntService,
    private act_router: ActivatedRoute,
    private sessionst: SessionStorageService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.Event_Name = this.act_router.snapshot.params['name'];
    this.Email = this.sessionst.get('email_id');
    var status;
    this.evnt_ser.getVolunteerStatus(this.Email).subscribe((data: any) => {
      console.log(data);
      let volunteerDetails = data[0].volunteer_event;
      console.log(volunteerDetails);
      for (let i = 0; i < volunteerDetails.length; i++) {
        if (this.Event_Name == volunteerDetails[i].Event_name) {
          status = volunteerDetails[i].status;
          console.log(status);
          this.flag = true;
        }
      }
      console.log(this.flag);
      if (this.flag) {
        if (status == '0') {
          this.Volunteer_Status = 'Pending';
        } else if (status == '1') {
          this.Volunteer_Status = 'Approved';
        } else if (status == '2') {
          this.Volunteer_Status = 'Rejected';
        } else {
          this.Volunteer_Status = '';
        }
      } else {
        this.Volunteer_Status = 'Not applied';
      }
    });
  }

  onClickApply() {
    this.evnt_ser
      .applyVolunteer(this.Event_Name, {
        email: this.Email,
        exp_txt: this.Experience,
      })
      .subscribe((data: any[]) => {
        console.log(data);
        if (data == this.flag_applied) {
          alert('You have already Applied');
          this._router.navigate(['event']);
        } else if (data == this.flag_limt) {
          alert('You have reached to maximun limit of Application');
          this._router.navigate(['event']);
        } else {
          alert('We have received your volunteer application');
          this._router.navigate(['event']);
        }
      });
  }
  onclickBack() {
    this._router.navigate(['/event']);
  }

  onWordCount(event) {
    if (event.key == ' ') {
      this.word_count += 1;
    }
    if(this.word_count>100)
    {
      event.preventDefault();
    }
  }
}
