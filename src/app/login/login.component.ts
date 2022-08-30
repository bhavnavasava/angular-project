import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';
import { AuthtokenService } from '../authtoken.service';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = ""
  password = ""

  constructor(private sessionService: SessionService, private toastr: ToastrService, private router: Router, private authTokenService: AuthtokenService) { }

  ngOnInit(): void {
  }


  login() {
    let user = { "email": this.email, "password": this.password }
    this.sessionService.loginApi(user).subscribe(res => {

      //json 
      // console.log(resp.data.user);
      // let authToken  = resp.data.user.authToken
      // localStorage.setItem("authToken",authToken)

      console.log(res)
      let authToken=res.data.authToken
      localStorage.setItem("authToken",authToken)
      //console.log(res.data.role)
      //console.log(res.data.user.role)
      // console.log("check role"+res.data.user.role.roleName)

      this.toastr.success("Login done")
      if (res.data.role.roleName == "User") {

        this.router.navigateByUrl("/home")
      } else if (res.data.role.roleName == "admin") {

        this.router.navigateByUrl("/dashboard")
      }
    }, err => {
      this.toastr.error("Invalid Credentials", "401")
    })
  }
}
