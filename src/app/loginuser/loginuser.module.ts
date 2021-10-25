import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginuserPageRoutingModule } from './loginuser-routing.module';

import { LoginuserPage } from './loginuser.page';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,,
    ReactiveFormsModule,
    LoginuserPageRoutingModule
  ],
  declarations: [LoginuserPage]
})
export class LoginuserPageModule {}
