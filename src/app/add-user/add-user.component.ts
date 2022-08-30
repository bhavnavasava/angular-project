import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ValidationErrors, Validator, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup

  constructor(private toastr:ToastrService,private router:Router) {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), this.strongPassword])

    })

  }

  ngOnInit(): void {
  }

  addUser() {

    console.log(this.userForm.value);
    console.log(this.userForm.valid);
    if(this.userForm.valid){ 

      this.toastr.success("User Add");
      this.router.navigateByUrl("/home")
    }

  }

  strongPassword(password: AbstractControl): ValidationErrors | null {
    let isUpper = false
    let isLower = false
    let isSpecial = false
    let isDigit = false
    let passwordValue = password.value as string

    if (passwordValue.length < 8)
      return null

    for (let i = 0; i < passwordValue.length; i++) {
      if (passwordValue.charAt(i) >= 'a' && passwordValue.charAt(i) <= 'z') {
        isUpper = true
      } else if (passwordValue.charAt(i) >= 'A' && passwordValue.charAt(i) <= 'Z') {
        isLower = true
      } else if (passwordValue.charAt(i) == '$' || passwordValue.charAt(i) == '#' || passwordValue.charAt(i) == '@') {
        isSpecial = true
      } else if (passwordValue.charAt(i) >= '0' && passwordValue.charAt(i) <= '9') {
        isDigit = true
      }
    }

    if (isLower && isUpper && isSpecial && isDigit)
      return null
    else
      return { "strongPassword": true }


  }
}
