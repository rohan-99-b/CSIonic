import { Component, OnInit } from '@angular/core';

import { Device } from '@capacitor/device';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  name='rohanbera@gmail.com';

   //infoD:any
   //device: Array<Object>=[];
  fruits = ['Apple', 'Orange', 'Banana'];
   
  constructor(public router:Router) {
  //  this.device=this.infoD
   }

  async getDInfo(){
   const infoD=await Device.getInfo();
    console.log(infoD);
  }

  async getBInfo(){
    const info = await Device.getBatteryInfo();
    console.log(info);
  }  


  ngOnInit() {
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(["/app/home"])
  }
  
}