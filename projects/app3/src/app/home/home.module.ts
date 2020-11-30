import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyButtonModule } from 'my-components';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, MyButtonModule],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {}
