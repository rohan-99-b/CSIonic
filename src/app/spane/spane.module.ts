import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpanePageRoutingModule } from './spane-routing.module';

import { SpanePage } from './spane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanePageRoutingModule
  ],
  declarations: [SpanePage]
})
export class SpanePageModule {}
