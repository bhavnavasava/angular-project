import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { TokenInterceptor } from './token.interceptor';
import { AddRoleComponent } from './add-role/add-role.component';
import { ViewroleComponent } from './viewrole/viewrole.component';
import { LogoutComponent } from './logout/logout.component';
import { EditroleComponent } from './editrole/editrole.component';
import { AddUserComponent } from './add-user/add-user.component';
//import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AddRoleComponent,
    ViewroleComponent,
    EditroleComponent,
    LogoutComponent,
    AddUserComponent   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
