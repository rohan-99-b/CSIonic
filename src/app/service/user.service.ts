import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = new BehaviorSubject(false);
  
  constructor(public http:HttpClient,public router:Router) { 
   
    if(this.isLoggedIn()){
      this.loggedIn.next(true)
    }

  }

  isLoggedIn(){
    if(window.localStorage.getItem('id')){      
      return true
    }
    else{
      return false
    }  
  }
}
