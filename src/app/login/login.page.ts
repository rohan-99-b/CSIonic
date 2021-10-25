import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  LoginForm :FormGroup

  user={
    userid:"rohan222",
    password:98765432
  }
  
  constructor(public router:Router,public fb : FormBuilder ) {
    this.LoginForm = this.fb.group({
      uid :["",[Validators.required,Validators.minLength(6)]],
      password :["",[Validators.required,Validators.minLength(8)]]
    })
   }

  ngOnInit() {
  }

  gotoDashboard(){
    //console.log(this.LoginForm.value)
    if(this.LoginForm.value.uid==this.user.userid && this.LoginForm.value.password==this.user.password){
      window.localStorage.setItem('id',this.user.userid);
      this.router.navigate(['/app/dashboard']);
    }
    
  }
}
