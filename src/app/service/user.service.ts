import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn = new BehaviorSubject(false);
  header = new BehaviorSubject(true);
  public authheader ;

  constructor(public http:HttpClient,public router:Router) { 
    if(localStorage.getItem('id')){
      this.authheader = {headers: new HttpHeaders().set('Authorization', localStorage.getItem('id') )};
    }

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
