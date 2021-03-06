import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionPageRoutingModule } from './action-routing.module';
//import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { ActionPage } from './action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionPageRoutingModule
  ],
  declarations: [ActionPage]
})
export class ActionPageModule {}
