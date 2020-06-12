import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { EvntService } from '../services/evnt.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { LoginService } from '../services/login.service';

export class signup {
  constructor(
    public name: string,
    public email: string,
    public pass: string,
    public contact: string,
    public bit: string,
    public year?: string,
    public id?: string,
    public stream?: string
  ) {}
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  Email_id: string;
  Password: string;
  Confirm_Password: string;
  Name: string;
  Mobile: string;
  BIT: string;
  Year: string;
  Student_id: string;
  Stream: string;

  constructor(
    private _router: Router,
    private evnt_ser: EvntService,
    private log_ser: LoginService
  ) {}

  ngOnInit(): void {}

  onBack() {
    this._router.navigate(['login']);
  }

  onClickSignup() {
    var flag = 0;
    this.evnt_ser
      .getStudentDetailsById(this.Email_id)
      .subscribe((data: any) => {
        console.log(data);
        if (data.length > 0) {
          console.log('exsited');
          flag = 1;
          console.log(flag);
        }
        if (flag == 1) {
          alert('This Email id is already exsited');
        } else {
          if (!(this.Password == this.Confirm_Password)) {
            alert('Please write the same password');
          } else {
            if (this.BIT == 'on') {
              // console.log('hello');
              const stu_id =
                this.Stream +
                '/' +
                this.Student_id +
                '/' +
                this.Year.substring(2);

              console.log(stu_id);
              this.log_ser
                .onSignup(
                  new signup(
                    this.Name,
                    this.Email_id,
                    this.Password,
                    this.Mobile,
                    this.BIT,
                    this.Year,
                    stu_id,
                    this.Stream
                  )
                )
                .subscribe((data: any) => {
                  console.log(data);
                  if (data) {
                    alert('Successfully Signed up!');
                  }
                });
            } else if (this.BIT == 'off') {
              console.log('byeee');
              this.log_ser
                .onSignup(
                  new signup(
                    this.Name,
                    this.Email_id,
                    this.Password,
                    this.Mobile,
                    null
                  )
                )
                .subscribe((data: any) => {
                  console.log(data);
                  if (data) {
                    alert('Successfully Signed up!');
                  }
                });
            }
          }
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
      if(this.Mobile.length==0)
      {
        if(event.charCode>=48 && event.charCode<=53)
          event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  }
}
