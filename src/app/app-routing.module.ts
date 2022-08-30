import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditroleComponent } from './editrole/editrole.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ViewroleComponent } from './viewrole/viewrole.component';

const routes: Routes = [
{component:SignupComponent,path:"signup"},
{component:LoginComponent,path:"login"},
{ component: HomeComponent, path: "home" },
{component:AddRoleComponent,path:"addrole"},
{component:ViewroleComponent,path:"viewrole"},
{component:EditroleComponent,path:"editrole/:roleId"},
{component:LogoutComponent,path:"logout"},
{component:AddUserComponent,path:"adduser"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
