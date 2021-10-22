import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  constructor(public router:Router) { }

  ngOnInit() {
  }
  data = {
    'token': 'A10540',
    'name': 'Rohan'
  };
  
  gotoDashboard(){
    window.localStorage.setItem('id',"1020");
    this.router.navigate(['/app/dashboard']);
  }
}
