import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  flag:boolean=true;
  email_id1:string;
  password1:string="";

  constructor() { }
  onclicklogin()
  {
    console.log(this.email_id1,this.password1);

    // this._ser.log_in_emp(new employee(this.email_id1,this.password1)).subscribe(
    //   (data:any[])=>
    //   {
    //       console.log(data);
    //       if(data.length==1)
    //       {
    //         localStorage.setItem('email_id',this.email_id1);
    //           localStorage.setItem('emp_type',data[0].Employee_type);
    //           this._router.navigate(['menu']);
    //       }
    //       else
    //       {
    //         alert('Email_id or Password Incorrect');
    //       }

    //   }
    // );
  }
onclickforget()
{
  //this._router.navigate(['forgetpassword']);


  // this._act.params.pipe(takeUntil(this.destroy)).subscribe(params => {
  //   if(this.currentdialog)
  //   {
  //     this.currentdialog.close();
  //   }
  //   this.currentdialog=this.matDialog.open(ForgetpasswordComponent,{
  //     data: {id : this.email_id1}
  //   });
  //   this.currentdialog.afterClosed().subscribe(result => {
  //     console.log('the dailog was closed');

  //   })
  // });


}

  ngOnInit(): void {

    localStorage.setItem('email_id',"");
    localStorage.setItem('emp_type',"");
  }

}
