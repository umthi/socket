import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { MdGridListModule } from '@angular/material';
import { StompService } from 'ng2-stomp-service';

@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component
  ],
  imports: [
    BrowserModule,
    MdGridListModule
  ],
  providers: [ StompService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
