import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routing } from "./app.routing";

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { TicketModule } from './ticket/ticket.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    LoginModule,
    TicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
