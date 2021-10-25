import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { SpanePageRoutingModule } from './spane-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { SpanePage } from './spane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpanePageRoutingModule,
    HttpClientModule,
    //BrowserModule
  ],
  declarations: [SpanePage]
})
export class SpanePageModule {}
