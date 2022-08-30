import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = ""
  email = ""
  password: string = ""


  constructor(private tsService:ToastrService,private router:Router,private sessionService: SessionService){

  }

  signup() {
    console.log(this.firstName)
    console.log(this.email);
    console.log(this.password);


    let user = {
      "firstName": this.firstName,
      "email": this.email,
      "password": this.password,
      "gender": "male"
    }

    this.sessionService.signupApi(user).subscribe(success => {
      if (success) {
        this.tsService.success("Signup", "", { timeOut: 3000 });
        this.router.navigateByUrl("/login")
        console.log("in signup true")
        

      }
    }, err => {
      console.log("in signup false")
      this.tsService.error("Try again..", "", { timeOut: 3000 });
    })
}
}
