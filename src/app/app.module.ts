import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
// Import FormsModule :
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { AuthloginService } from './login/authlogin.service'; // Import generated service

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
