import { Component, OnInit } from '@angular/core';

import { Device } from '@capacitor/device';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  user:any
  info2:any
  info1:any
  inf022:any
   
  constructor(public router:Router) {
  //  this.device=this.infoD
   }

  async getDInfo(){
   var infoD=await Device.getInfo();
   this.info1=Object.values(infoD)
   console.log(Object.values(infoD));
  
  }

  async getBInfo(){
    var info = await Device.getBatteryInfo();
    this.info2=Object.values(info)
    this.inf022=JSON.stringify(this.info2)
    console.log(this.inf022);
  }  


  ngOnInit() {
    // var infoD=Device.getInfo();
    // console.log(infoD);

    this.user=window.localStorage.getItem('id')
    if(!this.user){
      
      this.router.navigate(["/app/login"])
    }
    else{
      this.router.navigate(["/app/dashboard"])
    }
  }

  logout(){
    window.localStorage.clear();
    this.router.navigate(["/app/home"])
  }
  
}